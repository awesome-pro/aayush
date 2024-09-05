import mongoose from "mongoose";


export type status = "pending" | "processing" | "success" | "failed";
export interface Appointment{
    _id: mongoose.Types.ObjectId;
    patientId: string;
    patientName: string;
    doctorId: string;
    doctorName: string;
    department: string;
    startTime: Date;
    endTime: Date;
    status: status;
    notes?: string[];
}



const AppointmentSchema = new mongoose.Schema<Appointment>(
    {
        patientId: { type: String, required: true },
        patientName: { type: String, required: true },
        doctorId: { type: String, required: true },
        doctorName: { type: String, required: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        department: { type: String, required: true },
        status: { type: String, required: true },
        notes: { type: [String], required: false }
    },
    {
        timestamps: true
    }
);

const AppointmentModel = mongoose.models.Appointment || mongoose.model<Appointment>('Appointment', AppointmentSchema);
export default AppointmentModel;