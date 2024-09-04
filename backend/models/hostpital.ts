import mongoose from "mongoose";


const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    location: {
        type: {
        type: String,
        enum: ["Point"],
        required: true,
        },
        coordinates: {
        type: [Number],
        required: true,
        },
    },
    });