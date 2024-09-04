import AdminModel from "@/backend/models/admin";
import { NextRequest, NextResponse } from "next/server";


export default async function GET(req: NextRequest) {

    try {
        const admins = AdminModel.find();

        if (admins) {
            return NextResponse.json({ data: admins }, {status: 200});
        }
        
        return NextResponse.json({ message: "No admins found" }, {status: 404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching admins" }, {status: 400});   
    }
}