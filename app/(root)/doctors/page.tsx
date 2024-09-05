"use client";

import React, { useCallback } from 'react';
import { columns } from './columns'; // Import the columns definition
import { DataTable } from '@/components/ui/data-table';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2, Plus } from 'lucide-react';

import { useNewDoctor } from '@/features/doctors/hooks/use-new-doctor'; // Hook for opening the new doctor form
import { Doctor } from '@/backend/models/doctor'; // Doctor model interface
import axios from 'axios';

function DoctorPage() {
  const newDoctor = useNewDoctor(); // Hook to open new doctor form
  const [doctors, setDoctors] = React.useState<Doctor[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  // Fetch Doctors
  const fetchDoctors = useCallback(async () => {
    try {
      const response = await axios.get('/api/doctors'); // API endpoint for fetching doctors
      setDoctors(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  return (
    <div className='max-w-screen-2xl lg:mx-32 mx-3 pb-10'>
      <Card className='border-none drop-shadow-sm'>
        <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
          <CardTitle className='text-xl line-clamp-1'>
            Doctor Page
          </CardTitle>
          <Button
            className='w-full lg:w-48'
            size='sm'
            onClick={newDoctor.onOpen} // Trigger the new doctor form
          >
            <Plus size={16} className='mr-2' />
            Add New
          </Button>
        </CardHeader>
        <CardContent className='lg:px-auto lg:mx-auto -m-4'>
          <div className="container mx-0 py-10">
            {loading ? (
              <Skeleton className="h-12 w-full"/> // Show loading skeletons while data is loading
            ) : (
              <DataTable
                columns={columns}  // Set columns for the data table
                data={doctors}    // Provide doctor data to the table
                filterKey='name'   // Optional: filter data by doctor name
                onDelete={(id) => {
                  console.log('Delete doctor with ID:', id); // Handle doctor deletion
                }}
                disabled={loading} // Disable interactions while loading
              />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DoctorPage;
