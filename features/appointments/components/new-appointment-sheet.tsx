"use client";

import React, { useCallback } from 'react'
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
import { Patient } from '@/backend/models/patient';
import { Department } from '@/backend/models/department';
import { Doctor } from '@/backend/models/doctor';

  
const formSchema = appointmentSchema;

type FormValues = Zod.infer<typeof formSchema>


function NewCategorySheet() {

    const {isOpen, onClose} = useNewAppointment();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [patients, setPatients] = React.useState<Patient[]>([]);
    const [departments, setDepartments] = React.useState<Department[]>([]);
    const [doctors, setDoctors] = React.useState<Doctor[]>([]);


    const fetchPatients = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/api/patients');
            console.log('Patients: ', response.data.data);
            setPatients(response.data.data);
        } catch (error) {
            console.error('Error fetching patients: ', error);
        }finally{
            setLoading(false);
        }
    }
    ,[]);

    const fetchDepartments = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/api/departments');
            console.log('Departments: ', response.data);
           setDepartments(response.data.data);
        } catch (error) {
            console.error('Error fetching departments: ', error);
        }finally{
            setLoading(false);
        }
    }, []);

    const fetchDoctors = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/api/doctors');
            console.log('Doctors: ', response.data.data);
            setDoctors(response.data.data);
        } catch (error) {
            console.error('Error fetching doctors: ', error);
        }finally{
            setLoading(false);
        }
    },[]);
    React.useEffect(() => {
        fetchPatients();
        fetchDepartments();
        fetchDoctors();
    }, [fetchPatients, fetchDepartments, fetchDoctors]);
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
            <SheetTitle>New Appointment {loading}</SheetTitle>
            <SheetDescription>
                Create a new Appointment
            </SheetDescription>
            </SheetHeader>
            <AppointmentForm
            onCreateDoctor={() => {
                console.log('create doctor');
            }}
            onCreatePatient={() => {
                console.log('create patient');
            }}
            onCreateDepartment={() => {
                console.log('create department');
            }}
            patientOptions={patients.map((patient) => ({
                label: patient.name + '-' + (patient._id as string),
                value: (patient._id as string)
            }))}
            doctorOptions={doctors.map((doctor) => ({
                label: doctor.name + '-' + (doctor._id as string),
                value: (doctor._id as string)
            }))}
            departmentOptions={departments.map((department) => ({
                label: department.name + '-' + (department._id as string),
                value: (department._id as string)
            }))}
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