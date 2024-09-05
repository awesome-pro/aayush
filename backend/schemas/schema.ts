import * as z from 'zod';

export const appointmentSchema = z.object({
    patientId: z.string(),
    patientName: z.string(),
    doctorId: z.string(),
    doctorName: z.string(),
    department: z.string(),
    startTime: z.date(),
    endTime: z.date(),
    status: z.enum(["pending", "processing", "success", "failed"]),
    notes: z.array(z.string())
});