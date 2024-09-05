"use client";

import React, { useCallback } from 'react'
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2, Plus } from 'lucide-react'

import { useNewAppointment } from '@/features/appointments/hookes/use-new-appointment';
import { Appointment } from '@/backend/models/appointment';
import axios from 'axios';

function AppointmentPage() {

    const newAppointment = useNewAppointment();

    const [appointment, setAppointment] = React.useState<Appointment[]>([]); 
    const [loading, setLoading] = React.useState<boolean>(true);


    const fetchAppointment = useCallback(async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/api/appointments');
        const data = await response.data.data;
        console.log('Data: ', data, response);
        setAppointment(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }finally{
        setLoading(false);
      }
    }
    , []);

    React.useEffect(() => {
      fetchAppointment();
    }, [fetchAppointment]);

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
               onClick={newAppointment.onOpen}
               >
                <Plus size={16} className='mr-2' />
                    Add New
               </Button>
            </CardHeader>
            <CardContent className='lg:px-auto lg:mx-auto -m-4'>
              <div className="container mx-0 py-10">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }

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
               onClick={newAppointment.onOpen}
               >
                <Plus size={16} className='mr-2' />
                    Add New
               </Button>
            </CardHeader>
            <CardContent className='lg:px-auto lg:mx-auto -m-4'>
              <div className="container mx-0 py-10">
                <DataTable 
                columns={columns} 
                data={appointment} 
                filterKey='patientName'
                onDelete={() => {
                  console.log('Delete')
                }}
                disabled={loading}
                />
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default AppointmentPage