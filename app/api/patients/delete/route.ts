import { NextResponse, NextRequest } from "next/server";
import PatientModel from "@/backend/models/patient";
import dbConnect from "@/lib/db-connect";

export async function DELETE(req: NextRequest) {
    await dbConnect();

    try {
        // Extract the patient ID from the request URL
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Patient ID is required" }, { status: 400 });
        }

        // Find and delete the patient by ID
        const result = await PatientModel.findByIdAndDelete(id);

        if (!result) {
            return NextResponse.json({ message: "Patient not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Patient deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error deleting patient" }, { status: 500 });
    }
}
