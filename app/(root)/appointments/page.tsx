"use client";

import { Appointment } from "@/backend/models/appointment";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Plus } from 'lucide-react';
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNewAppointment } from "@/features/appointments/hookes/use-new-transactions";

enum VARIANTS {
    LIST = "LIST",
    IMPORT = "IMPORT"
  }
  
  const INITIAL_IMPORT_RESULTS = {
    data: [],
    errors: [],
    meta: {}
  };
  

function Appointments() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [variant, setVariant] = useState<VARIANTS>(VARIANTS.LIST);
    const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULTS)

    const onUpload = (results: typeof INITIAL_IMPORT_RESULTS) => {
        console.log({ results })
        setImportResults(results);
        setVariant(VARIANTS.IMPORT);
    }

    const onCancelImport = () => {
        setImportResults(INITIAL_IMPORT_RESULTS);
        setVariant(VARIANTS.LIST)
    }

    const newAppointment = useNewAppointment();


    // Fetch appointments function
    const fetchAppointments = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get<Appointment[]>('/api/appointments');
            setAppointments(response.data);
        } catch (error) {
            setError('Failed to fetch appointments');
        } finally {
            setLoading(false);
        }
    }, []); // Empty dependency array ensures this only runs once

    useEffect(() => {
        fetchAppointments();
    }, [fetchAppointments]); // Dependency on fetchAppointments

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='max-w-screen-2xl lg:mx-32 mx-3 pb-10 -mt-24'>
        <Card className='border-none drop-shadow-sm'>
          <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
            <CardTitle className='text-xl line-clamp-1'>
              Appointment
            </CardTitle>
            <div className='flex gap-2 flex-col lg:flex-row items-center justify-center'>
              <Button
                className=' w-full lg:w-32'
                size={'sm'}
                onClick={newtransaction.onOpen}
              >
                <Plus size={16} className='mr-2' />
                Add New
              </Button>
              <UploadButton onUpload={onUpload} />
            </div>
          </CardHeader>
          <CardContent className='lg:px-auto lg:mx-auto -m-4'>
            <p>
              {transactions.length} transactions
            </p>
            <div className="container mx-0 py-10">
              <DataTable
                columns={columns}
                data={transactions}
                filterKey='payee'
                onDelete={(row) => {
                  const ids = row.map((r) => r.original.id);
                  deletetransactions.mutate({ ids });
                }}
                disabled={isDisabled}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
}

export default Appointments;
