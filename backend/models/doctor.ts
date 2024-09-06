import mongoose from "mongoose";

// Time slot is now a string in "HH:mm" format
export type TimeSlot = {
    startTime: string; // Format: "HH:mm"
    endTime: string;   // Format: "HH:mm"
};

// AvailabilitySlot contains the day and time slots
export type AvailabilitySlot = {
    day: string;       // e.g., "Monday"
    slots: TimeSlot[];
};

// Booked slots are associated with a specific date
export type BookedSlot = {
    date: string;      // e.g., "YYYY-MM-DD"
    startTime: string; // Format: "HH:mm"
    endTime: string;   // Format: "HH:mm"
};

// Doctor model interface
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
    availability?: AvailabilitySlot[]; // Weekly availability
    occupiedSlots?: BookedSlot[];      // Specific booked slots
    bio?: string;
    rating?: number;
}

// Doctor schema
const DoctorSchema = new mongoose.Schema<Doctor>({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: false },
    departments: { type: [String], required: true },
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
    availability: [
        {
            day: { type: String, required: false }, // e.g., "Monday"
            slots: [
                {
                    startTime: { type: String, required: false }, // "HH:mm"
                    endTime: { type: String, required: false },   // "HH:mm"
                }
            ]
        }
    ],
    occupiedSlots: [
        {
            date: { type: String, required: true }, // e.g., "YYYY-MM-DD"
            startTime: { type: String, required: true }, // "HH:mm"
            endTime: { type: String, required: true },   // "HH:mm"
        }
    ],
    bio: { type: String, required: false },
    rating: { type: Number, required: false },
}, {
    timestamps: true
});

const DoctorModel = mongoose.models.Doctor || mongoose.model<Doctor>('Doctor', DoctorSchema);
export default DoctorModel;
