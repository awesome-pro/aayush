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

import { useNewPatient } from '@/features/patients/hooks/use-new-patient'
import { Patient } from '@/backend/models/patient'; // Patient model interface
import axios from 'axios';

function PatientPage() {
  const newPatient = useNewPatient(); // Hook to open new patient form
  const [patients, setPatients] = React.useState<Patient[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  // Fetch Patients
  const fetchPatients = useCallback(async () => {
    try {
      const response = await axios.get('/api/patients'); // API endpoint for fetching patients
      setPatients(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching patients:', error);
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  return (
    <div className='max-w-screen-2xl lg:mx-32 mx-3 pb-10'>
      <Card className='border-none drop-shadow-sm'>
        <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
          <CardTitle className='text-xl line-clamp-1'>
            Patient Page
          </CardTitle>
          <Button
            className='w-full lg:w-48'
            size='sm'
            onClick={newPatient.onOpen} 
          >
            <Plus size={16} className='mr-2' />
            Add New
          </Button>
        </CardHeader>
        <CardContent className='lg:px-auto lg:mx-auto -m-4'>
          <div className="container mx-0 py-10">
            {loading ? (
              <Skeleton className="h-12 w-full" /> // Show loading skeletons while data is loading
            ) : (
              <DataTable
                columns={columns}  // Set columns for the data table
                data={patients}    // Provide patient data to the table
                filterKey='name'   // Optional: filter data by patient name
                onDelete={(id) => {
                  console.log('Delete patient with ID:', id); // Handle patient deletion
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

export default PatientPage;
