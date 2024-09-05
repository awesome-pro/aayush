"use client";

//import { toast } from 'sonner';
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"

import { appointmentSchema } from '@/backend/schemas/schema';
import { useOpenAppointment } from '../hookes/use-open-appointment';
import { useGetAppointments } from '../api/use-get-appointment';
import { useEditAppointment } from '../api/use-edit-appointment';
import { useDeleteAppointment } from '../api/use-delete-appointment';
import { useConfirm } from '@/hooks/use-confirm';

import { Skeleton } from '@/components/ui/skeleton';
import { Loader2 } from 'lucide-react';
import AppointmentForm from './appointment-form';

  
const formSchema = appointmentSchema;

type FormValues = Zod.infer<typeof formSchema>


function EditAppointmentsheet() {

    const { isOpen, onClose, id } = useOpenAppointment();
    const [ConfirmDialog, confirm] = useConfirm(
      "Are You Confirmed?",
      "You are about to DELETE this category forever"
    )

    const categoryQuery = useGetAppointments(id)
    const editMutation = useEditAppointment(id);
    const deleteMutation = useDeleteAppointment(id);

    const isLoading = categoryQuery.isLoading
    const isPending = editMutation.isPending || deleteMutation.isPending

    const onSubmit = (values: FormValues) => {
        //toast.info('Creating category');
        console.log(values);
        
        editMutation.mutate(values, {
          onSuccess: () => {
            onClose();
            // toast.success('category edited successfully');
          },
          onError: (error) => {
            onClose();
            //toast.error('Failed to create category');
            console.error(error);
          },
          onSettled: () => {
            console.log('onSettled')
          }
        });
    }

    const onDelete = async() => {
      const ok = await confirm()
      if(ok){
        deleteMutation.mutate(undefined, {
          onSuccess: () => {
            //toast.success("category deleted successfully :)")
            onClose();
          }
        })
      }
    }

    const defaultValues = categoryQuery.data ? {
      name: categoryQuery.data?.name
    } : {
      name: ""
    }

    

  return (
    <>
    <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent className='bg-white '>
              <SheetHeader>
              <SheetTitle>Edit category</SheetTitle>
              <SheetDescription>
                  Edit an exisitng category
              </SheetDescription>
              </SheetHeader>
              {
                isLoading ? (
                  <div className='absolute inset-0 items-center flex flex-col mt-32 justify-top gap-4 p-5'>
                    <Skeleton className='w-full h-[45px] p-1 rounded-xl'/>
                    <Skeleton className='w-full h-[45px] p-1 rounded-xl'/>
                    <Skeleton className='w-full h-[45px] p-1 rounded-xl'/>
                    <Loader2 className='size-4 text-muted-foreground animate-spin'/>
                  </div>
                ) : (
                  <AppointmentForm 
                  id={id}
                  onSubmit={onSubmit}
                  disabled={isPending}
                  defaultValues={defaultValues}
                  onDelete={onDelete}
                  />
                )
              }
          </SheetContent>
      </Sheet>
    </>
  )
}

export default EditAppointmentsheet