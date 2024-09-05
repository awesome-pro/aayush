import { NextResponse, NextRequest } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import PatientModel from "@/backend/models/patient";
import dbConnect from "@/lib/db-connect";


export default async function POST(req: NextRequest) {
    const user = await currentUser();

    const { diseases, weight, height, bloodGroup, allergies, currentMedications, address } = await req.json();
try {
        await dbConnect();
        const newPatient = new PatientModel({
            name: user?.fullName,
            email: user?.emailAddresses[0].emailAddress,
            phoneNumber: user?.phoneNumbers[0].phoneNumber, 
            diseases,
            weight,
            height,
            allergies,
            currentMedications,
            address,
            bloodGroup
        }); 
    
        const response = await newPatient.save();
        if (response) {
            return NextResponse.json({ message: "Patient created successfully" }, {status: 200});
        }
} catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error creating patient" }, {status: 400});
}

    return NextResponse.json({ message: "Doctor creation failed" }, {status: 400});
}
