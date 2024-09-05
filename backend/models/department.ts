import mongoose, { Schema } from "mongoose";
export interface Department {
    _id: string;
    name: string;
    doctors?: string[];
    image?: string;
    maxBeds?: number;
    admittedPatientIDs?: string[];
}

const DepartmentSchema = new Schema<Department>({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    doctors: { type: [String], required: false },
    image: { type: String, required: false },
    maxBeds: { type: Number, required: false },
    admittedPatientIDs: { type: [String], required: false },
});

const DepartmentModel = mongoose.models && mongoose.models.Department || mongoose.model<Department>('Department', DepartmentSchema);
export default DepartmentModel;