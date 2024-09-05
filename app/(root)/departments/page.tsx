"use client";

import React, { useCallback } from 'react'
import { columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2, Plus } from 'lucide-react'

import { useNewDepartment } from '@/features/departments/hooks/use-new-department'; // Update this hook for departments
import { Department } from '@/backend/models/department'; // Assuming there's a Department model
import axios from 'axios';

function DepartmentPage() {

    const newDepartment = useNewDepartment();

    const [departments, setDepartments] = React.useState<Department[]>([]); 
    const [loading, setLoading] = React.useState<boolean>(true);

    // Fetch Departments
    const fetchDepartments = useCallback(async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/departments'); // Update the API endpoint
        const data = await response.data.data;
        console.log('Data: ', data, response);
        setDepartments(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }, []);

    React.useEffect(() => {
      fetchDepartments();
    }, [fetchDepartments]);

  return (
    <div className='max-w-screen-2xl lg:mx-32 mx-3 pb-10 '>
        <Card className='border-none drop-shadow-sm'>
            <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
                <CardTitle className='text-xl line-clamp-1'>
                    Department Page
                </CardTitle>
              <Button 
               className=' w-full lg:w-48' 
               size={'sm'}
               onClick={newDepartment.onOpen} // Hook to open new department form
               >
                <Plus size={16} className='mr-2' />
                    Add New
               </Button>
            </CardHeader>
            <CardContent className='lg:px-auto lg:mx-auto -m-4'>
              <div className="container mx-0 py-10">
                {loading ? (
                  <Skeleton className="h-12 w-full"/> // Show loading skeletons
                ) : (
                  <DataTable 
                    columns={columns}  // Ensure columns are set for department fields
                    data={departments} 
                    filterKey='name'  // Adjust filterKey based on department data (e.g., filter by department name)
                    onDelete={() => {
                      console.log('Delete')
                    }}
                    disabled={loading}
                  />
                )}
              </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default DepartmentPage;
