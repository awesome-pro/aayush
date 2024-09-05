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

  if(loading) {
    return (
        <div className='max-w-screen-2xl lg:mx-32 mx-3 pb-10 '>
          <Card className='border-none drop-shadow-sm'>
            <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
                <CardTitle className='text-xl line-clamp-1'>
                    Appointment Page
                </CardTitle>
              <Button
               className=' w-full lg:w-48' 
               size={'sm'}
            >
                <Loader2 className='animate-spin' />
            </Button>
            </CardHeader>
            <CardContent>
                <Skeleton className='h-96' />
            </CardContent>
          </Card>
        </div>
      );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className='bg-white w-full overflow-y-scroll'>
            <SheetHeader>
            <SheetTitle>New Appointment</SheetTitle>
            <SheetDescription>
                Create a new Appointment to organise your transactions
            </SheetDescription>
            </SheetHeader>
            <AppointmentForm
            onSubmit={onSubmit}
            disabled={false}
            defaultValues={{
                _id: "",
                patientId: "",
                patientName: "",
                doctorId: "",
                doctorName: "",
                department: "",
                startTime: new Date(),
                endTime: new Date(),
                status: "pending",
                notes: []
            }}
            />
        </SheetContent>
    </Sheet>

  )
}

export default NewCategorySheet