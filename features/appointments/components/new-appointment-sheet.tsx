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
import { useCreateAppointment } from '../api/use-create-appointment';

  
const formSchema = appointmentSchema;

type FormValues = Zod.infer<typeof formSchema>


function NewCategorySheet() {

    const {isOpen, onClose} = useNewAppointment();
    const mutation = useCreateAppointment();

    const onSubmit = (values: FormValues) => {
        //toast.info('Creating Category');
        console.log("values: " + {values});
        
        mutation.mutate(values, {
          onSuccess: () => {
            onClose();
            //toast.success('Category created successfully');
          },
          onError: (error) => {
            onClose();
            //toast.error('Failed to create Category');
            console.error(error);
          },
          onSettled: () => {
            console.log('onSettled')
          }
        });
        
    }

    

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
        
        <SheetContent className='bg-white '>
            <SheetHeader>
            <SheetTitle>New Category</SheetTitle>
            <SheetDescription>
                Create a new Category to organise your transactions
            </SheetDescription>
            </SheetHeader>
            <AppointmentForm
            onSubmit={onSubmit}
            disabled={mutation.isPending}
            defaultValues={{
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