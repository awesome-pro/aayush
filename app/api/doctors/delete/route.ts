import { NextResponse, NextRequest } from "next/server";
import DoctorModel from "@/backend/models/doctor";
import dbConnect from "@/lib/db-connect";

export async function DELETE(req: NextRequest) {
    await dbConnect();

    try {
        // Extract the doctor ID from the request URL
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Doctor ID is required" }, { status: 400 });
        }

        // Find and delete the doctor by ID
        const result = await DoctorModel.findByIdAndDelete(id);

        if (!result) {
            return NextResponse.json({ message: "Doctor not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Doctor deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error deleting doctor" }, { status: 500 });
    }
}
