import { NextResponse, NextRequest } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import AdminModel from "@/backend/models/admin";


export default async function PUT(req: NextRequest) {

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const {name, email, phoneNumber} = await req.json();

    try {
        const updatedAdmin = await AdminModel.findByIdAndUpdate(
            id,
            {
                name,
                email,
                phoneNumber
            },
            { new: true }
        );
    
        if (updatedAdmin) {
            return NextResponse.json({ message: "Admin updated successfully" }, {status: 200});
        }   
    
        return NextResponse.json({ message: "Admin creation failed" }, {status: 400});

    } catch (error) {
        console.error(error); 
        return NextResponse.json({ message: "Admin update failed" }, {status: 400});
    }
}
