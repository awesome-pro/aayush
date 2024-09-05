import * as z from 'zod';

export const appointmentSchema = z.object({
    _id: z.string(),
    patientId: z.string(),
    patientName: z.string(),
    doctorId: z.string(),
    doctorName: z.string(),
    department: z.string(),
    startTime: z.date(),
    endTime: z.date(),
    status: z.enum(["pending", "processing", "success", "failed"]),
    notes: z.array(z.string()).optional()
});

export const patientSchema = z.object({
    _id: z.string(),
    name: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    age: z.number(),
    diseases: z.array(z.string()).optional(),
    height: z.number(),
    weight: z.number(),
    bloodGroup: z.string(),
    allergies: z.array(z.string()).optional(),
    currentMedications: z.array(z.string()).optional(),
    address: z.string(),
    image: z.string().optional()
});