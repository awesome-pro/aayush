import DepartmentModel from "@/backend/models/department";
import { NextRequest, NextResponse } from "next/server";


export default async function GET(req: NextRequest) {

    try {
        const departments = DepartmentModel.find();

        if (departments) {
            return NextResponse.json({ data: departments }, {status: 200});
        }
        
        return NextResponse.json({ message: "No departments found" }, {status: 404});

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching departments" }, {status: 400});   
    }
}