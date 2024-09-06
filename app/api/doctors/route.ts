import DoctorModel from "@/backend/models/doctor";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    console.log('GET request to doctors');
    const { searchParams } = new URL(req.url, 'http://localhost:3000');
    const id = searchParams.get('id');

    try {
        console.log('ID is being processed: ', id);
        const doctors = await DoctorModel.find();

        if(id) {
            const doctor = await DoctorModel.findById(id);
            if (doctor) {
                console.log('Doctor: ', doctor);
                return NextResponse.json({ data: doctor }, {status: 200});
            }
            console.log('Doctor not found');
            return NextResponse.json({ message: "Doctor not found" }, {status: 404});
        }

        if (doctors) {
            return NextResponse.json({ data: doctors }, {status: 200});
        }
        
        return NextResponse.json({ message: "No doctors found" }, {status: 404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching doctors" }, {status: 400});   
    }
}