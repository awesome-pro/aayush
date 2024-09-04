import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db-connect";
import DoctorModel from "@/backend/models/doctor";


export  async function GET(req: NextRequest) {

    await dbConnect();

    try {
        const doctors = DoctorModel.find();

        if (doctors) {
            console.log(doctors);
            return NextResponse.json({ message: "Doctors fetched successfully " }, {status: 200});
        }
        
        return NextResponse.json({ message: "No doctors found" }, {status: 404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching doctors" }, {status: 400});   
    }
}