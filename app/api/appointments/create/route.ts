import { NextResponse, NextRequest } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import AppointmentModel from "@/backend/models/appointment";


export default async function POST(req: NextRequest) {
    
   const { patientId, patientName, doctorId, doctorName, startTime, endTime, status, notes } = await req.json();

    const newDoctor = new AppointmentModel({
        patientId,
        patientName,
        doctorId,
        doctorName,
        startTime,
        endTime,
        status,
        notes
    }); 

    const response = await newDoctor.save();
    if (response) {
        return NextResponse.json({ message: "Doctor created successfully", data: response }, {status: 200});
    }

    return NextResponse.json({ message: "Doctor creation failed" }, {status: 400});
}