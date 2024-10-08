import MedicineModel from "@/backend/models/medicine";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db-connect";


export async function GET(request: NextRequest) {
    console.log("GET /api/appointments is called");
    const searchParams = new URLSearchParams(request.url);

    
    await dbConnect();
    try {
        const appointments = await MedicineModel.find();

        if (appointments) {
            console.log("medicines found: ", appointments);
            return NextResponse.json({ data: appointments, message: "data" }, {status: 200});
        }
        return NextResponse.json({ message: "No appointments found" }, {status: 404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching appointments" }, {status: 400});   
    }

    
}