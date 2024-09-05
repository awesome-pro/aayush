import mongoose from "mongoose";
import dbConnect from "@/lib/db-connect";


export interface Admission {
    _id: mongoose.Types.ObjectId;
    patientID: string;
    departmentID: string;
    bedNumber: number;
    assignedDoctorID?: string;
    assignedDoctorName?: string;
    admissionTime: Date;
    dischargeTime?: Date;
}


const AdmissionSchema = new mongoose.Schema<Admission>(
    {
        patientID: { type: String, required: true },
        departmentID: { type: String, required: true },
        bedNumber: { type: Number, required: true },
        assignedDoctorID: { type: String, required: false },
        assignedDoctorName: { type: String, required: false },
        admissionTime: { type: Date, required: true },
        dischargeTime: { type: Date, required: false }
    },
    {
        timestamps: true
    }
);

const AdmissionModel = mongoose.models.Admission || mongoose.model<Admission>('Admission', AdmissionSchema);
export default AdmissionModel;