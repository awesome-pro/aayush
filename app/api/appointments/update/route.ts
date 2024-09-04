import { NextResponse, NextRequest } from "next/server";
import AppointmentModel from "@/backend/models/appointment";


export default async function PUT(req: NextRequest) {

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");


    const { patientId, patientName, doctorId, doctorName, startTime, endTime, status, notes } = await req.json();
    try {
        const updatedAppointment = await AppointmentModel.findByIdAndUpdate(
            id,
            {
                patientId,
                patientName,
                doctorId,
                doctorName,
                startTime,
                endTime,
                status,
                notes
            },
            { new: true }
        );
    
        if (updatedAppointment) {
            return NextResponse.json({ message: "Appointment updated successfully" }, {status: 200});
        }   
    
        return NextResponse.json({ message: "Doctor creation failed" }, {status: 400});

    } catch (error) {
        console.error(error); 
        return NextResponse.json({ message: "Doctor update failed" }, {status: 400});
    }
}
