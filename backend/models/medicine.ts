import mongoose from "mongoose";

export interface Medicine {
    name: string;
    description?: string;
    manufacturer?: string;
    price: number;
    stock: number;
    image?: string;
}

const MedicineSchema = new mongoose.Schema<Medicine>({
    name: { type: String, required: true },
    description: { type: String, required: false },
    manufacturer: { type: String, required: false },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: false },
},
{
    timestamps: true
});