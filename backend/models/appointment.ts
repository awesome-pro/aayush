import mongoose from "mongoose";

export interface Appointment{
    patientId: string;
    patientName: string;
    doctorId: string;
    doctorName: string;
    department: string;
    startTime: Date;
    endTime: Date;
    status: string;
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