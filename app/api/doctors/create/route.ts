import { NextResponse, NextRequest } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import DoctorModel from "@/backend/models/doctor";
import dbConnect from "@/lib/db-connect";


export async function POST(req: NextRequest) {
    //const user = await currentUser();

    const { name, email, phoneNumber, departments, hospital, roomNumber, qualifications, experience, consultationFee, availability, bio, rating } = await req.json();

    try {
        await dbConnect();
        const newDoctor = new DoctorModel({
            name: name,
            email: email,
            phoneNumber:  phoneNumber, 
            departments,
            hospital,
            roomNumber,
            qualifications,
            experience,
            consultationFee,
            availability,
            bio,
            rating
        }); 
    
        const response = await newDoctor.save();
        console.log(response);
        if (response) {
            return NextResponse.json({ message: "Doctor created successfully" }, {status: 200});
        }
    
        return NextResponse.json({ message: "Doctor creation failed" }, {status: 400});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error creating doctor" }, {status: 400});
    }
}
