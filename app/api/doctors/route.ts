import DoctorModel from "@/backend/models/doctor";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

    try {
        const doctors = await DoctorModel.find();

        if (doctors) {
            return NextResponse.json({ data: doctors }, {status: 200});
        }
        
        return NextResponse.json({ message: "No doctors found" }, {status: 404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching doctors" }, {status: 400});   
    }
}