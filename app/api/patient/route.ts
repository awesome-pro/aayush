import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db-connect";
import PatientModel from "@/backend/models/patient";


export  async function GET(req: NextRequest) {

    await dbConnect();

    try {
        const patients = PatientModel.find();

        if (patients) {
            console.log(patients);
            return NextResponse.json({ message: "Patients fetched successfully " }, {status: 200});
        }
        
        return NextResponse.json({ message: "No patients found" }, {status: 404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching patients" }, {status: 400});   
    }
}