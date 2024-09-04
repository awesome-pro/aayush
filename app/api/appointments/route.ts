import AppointmentModel from "@/backend/models/appointment";
import { NextRequest, NextResponse } from "next/server";


export default async function GET() {
    console.log("GET /api/appointments");

    try {
        const appointments = AppointmentModel.find();

        if (appointments) {
            return NextResponse.json({ data: appointments }, {status: 200});
        }
        
        return NextResponse.json({ message: "No appointments found" }, {status: 404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching appointments" }, {status: 400});   
    }

    
}