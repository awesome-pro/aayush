import AppointmentModel from "@/backend/models/appointment";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db-connect";
import { useSearchParams } from "next/navigation";


export async function GET() {
    console.log("GET /api/appointments is called");
    const params = useSearchParams();
    const from = params.get("from") || ""
    const to = params.get("to") || ""

    
    await dbConnect();
    try {
        const appointments = await AppointmentModel.find(
            {
                startTime: {
                    $lte: new Date(to)
                },
                endTime: {
                    $gte: new Date(from)
                }
            }
        );
        console.log("Appointments found: ", appointments);
        
        if (appointments) {  
            return NextResponse.json({ data: appointments }, {status: 200});
        }
        
        return NextResponse.json({ message: "No appointments found" }, {status: 404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching appointments" }, {status: 400});   
    }

    
}