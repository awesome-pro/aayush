import PatientModel from "@/backend/models/patient";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db-connect";

export async function GET(req: NextRequest) {
    
    try {
        await dbConnect();
        const patients = await PatientModel.find();

        if (patients) {
            return NextResponse.json({ data: patients }, {status: 200});
        }
        
        return NextResponse.json({ message: "No patients found" }, {status: 404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching patients" }, {status: 400});   
    }
}