"use client";

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { useNewAppointment } from '../hookes/use-new-appointment';
import AppointmentForm from './appointment-form';
import { appointmentSchema } from '@/backend/schemas/schema';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

  
const formSchema = appointmentSchema;

type FormValues = Zod.infer<typeof formSchema>


function NewCategorySheet() {

    const {isOpen, onClose} = useNewAppointment();
    const [loading, setLoading] = React.useState<boolean>(false);

    const onSubmit = async (values: FormValues) => {
        setLoading(true);
       try {
        const response = await axios.post('http://localhost:3000/api/appointments/create', values); 

        if(response.status === 201 || response.status === 200) {
            console.log('Appointment created successfully: ', response);
        }
       
       } catch (error) {
        console.error('Error creating appointment: ', error);
        onClose();
       }finally{
        setLoading(false);
        onClose();
       }
    }


  return (
    <Sheet open={isOpen || loading} onOpenChange={onClose}>
        <SheetContent className=' overflow-scroll no-scrollbar'>
            <SheetHeader>
            <SheetTitle>New Appointment</SheetTitle>
            <SheetDescription>
                Create a new Appointment
            </SheetDescription>
            </SheetHeader>
            <AppointmentForm
            onSubmit={onSubmit}
            disabled={loading}
            defaultValues={{
                _id: "12",
                patientId: "1234",
                patientName: "Abhinandan",
                doctorId: "12",
                doctorName: "Abhinandan",
                department: "343",
                startTime: new Date(),
                endTime: new Date(),
                status: "pending",
                notes: ['notes']
            }}
            />
        </SheetContent>
    </Sheet>

  )
}

export default NewCategorySheet