import { NextResponse, NextRequest } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import DoctorModel from "@/backend/models/doctor";
import dbConnect from "@/lib/db-connect";


export default async function PUT(req: NextRequest) {

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");


    const { departments, hospital, roomNumber, qualifications, experience, consultationFee, availability, bio, rating } = await req.json();
    await dbConnect();
    
    try {
        const updatedDoctor = await DoctorModel.findByIdAndUpdate(
            id,
            {
                departments,
                hospital,
                roomNumber,
                qualifications,
                experience,
                consultationFee,
                availability,
                bio,
                rating
            },
            { new: true }
        );
    
        if (updatedDoctor) {
            return NextResponse.json({ message: "Doctor updated successfully" }, {status: 200});
        }   
    
        return NextResponse.json({ message: "Doctor creation failed" }, {status: 400});

    } catch (error) {
        console.error(error); 
        return NextResponse.json({ message: "Doctor update failed" }, {status: 400});
    }
}
