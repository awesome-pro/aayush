import mongoose from "mongoose";

export interface Admin {
    name: string;
    email: string;
    phoneNumber?: number;
}

const AdminSchema = new mongoose.Schema<Admin>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: false }
},
{
    timestamps: true
});

const AdminModel = mongoose.models.Admin || mongoose.model<Admin>('Admin', AdminSchema);
export default AdminModel;