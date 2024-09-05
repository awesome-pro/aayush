import mongoose, { Document } from 'mongoose';

export interface Doctor extends Document {
    _id: string;
    name: string;
    email: string;
    phoneNumber?: number;
    departments: string[];
    hospital?: string;
    roomNumber?: string;
    appointmentIds?: string[];
    qualifications?: string;
    experience?: string;
    consultationFee?: number;
    availability?: string;
    bio?: string;
    rating?: number;
}

const DoctorSchema = new mongoose.Schema<Doctor>({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: false },
    departments: { type: [String], required : true },
    hospital: { type: String, required: false },
    roomNumber: { type: String, required: false },
    appointmentIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ],
    qualifications: { type: String, required: false },
    experience: { type: String, required: false },
    consultationFee: { type: Number, required: false },
    availability: { type: String, required: false },
    bio: { type: String, required: false },
    rating: { type: Number, required: false },
},
{
    timestamps: true
});

const DoctorModel = mongoose.models.Doctor || mongoose.model<Doctor>('Doctor', DoctorSchema);
export default DoctorModel;
