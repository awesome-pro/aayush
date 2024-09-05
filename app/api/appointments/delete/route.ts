import { NextResponse, NextRequest } from "next/server";
import AppointmentModel from "@/backend/models/appointment";
import dbConnect from "@/lib/db-connect";

export default async function DELETE(req: NextRequest) {
    await dbConnect();

    try {
        // Extract the appointment ID from the request URL or body
        const { searchParams } = new URL(req.url);
        const appointmentId = searchParams.get('appointmentId');

        if (!appointmentId) {
            return NextResponse.json({ message: "Appointment ID is required" }, { status: 400 });
        }

        // Find and delete the appointment by ID
        const result = await AppointmentModel.findByIdAndDelete(appointmentId);

        if (!result) {
            return NextResponse.json({ message: "Appointment not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Appointment deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "An error occurred", error: error }, { status: 500 });
    }
}
