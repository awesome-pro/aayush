import { NextResponse, NextRequest } from "next/server";
import DepartmentModel from "@/backend/models/department";
import dbConnect from "@/lib/db-connect";

export default async function DELETE(req: NextRequest) {

    await dbConnect();

    try {
        // Extract the department ID from the request URL
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Department ID is required" }, { status: 400 });
        }

        // Find and delete the department by ID
        const result = await DepartmentModel.findByIdAndDelete(id);

        if (!result) {
            return NextResponse.json({ message: "Department not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Department deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred while deleting the department" }, { status: 500 });
    }
}
