import { NextResponse, NextRequest } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import PatientModel from "@/backend/models/patient";


export default async function POST(req: NextRequest) {
    const user = await currentUser();

    const { diseases, weight, height, bloodGroup, allergies, currentMedications, address } = await req.json();

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

    return NextResponse.json({ message: "Doctor creation failed" }, {status: 400});
}
