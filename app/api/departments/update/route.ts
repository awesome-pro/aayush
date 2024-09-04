import { NextResponse, NextRequest } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import DepartmentModel from "@/backend/models/department";
import dbConnect from "@/lib/db-connect";


export default async function PUT(req: NextRequest) {

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");


    const { departments, hospital, roomNumber, qualifications, experience, consultationFee, availability, bio, rating } = await req.json();
    await dbConnect();
    try {
        const updatedDepartment = await DepartmentModel.findByIdAndUpdate(
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
    
        if (updatedDepartment) {
            return NextResponse.json({ message: "Department updated successfully" }, {status: 200});
        }   
    
        return NextResponse.json({ message: "Department creation failed" }, {status: 400});

    } catch (error) {
        console.error(error); 
        return NextResponse.json({ message: "Department update failed" }, {status: 400});
    }
}
