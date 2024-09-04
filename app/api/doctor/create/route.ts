import { NextResponse, NextRequest } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import DoctorModel from "@/backend/models/doctor";


export default async function POST(req: NextRequest) {
    const user = await currentUser();

    const { departments, hospital, roomNumber, qualifications, experience, consultationFee, availability, bio, rating } = await req.json();

    const newDoctor = new DoctorModel({
        name: user?.fullName,
        email: user?.emailAddresses[0].emailAddress,
        phoneNumber: user?.phoneNumbers[0].phoneNumber, 
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
    if (response) {
        return NextResponse.json({ message: "Doctor created successfully" }, {status: 200});
    }

    return NextResponse.json({ message: "Doctor creation failed" }, {status: 400});
}
