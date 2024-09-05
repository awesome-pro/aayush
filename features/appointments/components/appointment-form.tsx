import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import AppointmentModel from '@/backend/models/appointment'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Trash } from 'lucide-react'
import { appointmentSchema } from '@/backend/schemas/schema'
import { formatDateToInput, parseDateFromInput } from '@/lib/utils'
import Select from '@/components/select'
import DatePicker from '@/components/date-picker'

const formSchema = appointmentSchema;

type FormValues = z.infer<typeof formSchema>

type Props = {
    id?: string
    defaultValues?: FormValues;
    onSubmit: (values: FormValues) => void;
    onDelete?: () => void;
    disabled?: boolean;
    patientOptions?: { label: string; value: string }[];
    doctorOptions?: { label: string; value: string }[];
    departmentOptions?: { label: string; value: string }[]; 
    onCreateDoctor?: (value: string) => void;
    onCreatePatient?: (value: string) => void;
    onCreateDepartment?: (value: string) => void;
}

function AppointmentForm(
    {
        id,
        defaultValues,
        onSubmit,
        onDelete,
        disabled,
        patientOptions = [],
        doctorOptions = [],
        departmentOptions = [],
        onCreateDoctor,
        onCreatePatient,
        onCreateDepartment
    } : Props
) {

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues
    });

    const handleSubmit = (values: FormValues) => {
        console.log("values are here from form: " + values)
        //toast.info('Creating Category');
        onSubmit(values);
    }

    const handleDelete = () => {
        console.log('delete')
        onDelete?.();
    }
  return (
    <div className=''>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4 mt-4 items-end'>
            <FormField
                name='_id'
                control={form.control}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>
                           Appointment ID
                        </FormLabel>
                        <FormControl>
                            <Input
                            disabled={disabled}
                            placeholder='e.g. Food, Travel...'
                            {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}
             />
                <div className='md:grid md:grid-cols-2 items-center justify-center gap-6'>
                <FormField
                name='patientId'
                control={form.control}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>
                           Patient Name
                        </FormLabel>
                        <FormControl>
                        <Select
                            placeholder='Select an Account'
                            options={patientOptions}
                            onCreate={onCreatePatient}
                            value={field.value}
                            onChange={field.onChange}
                            disabled={disabled}
                        />
                        </FormControl>
                    </FormItem>
                )}
                />
                <FormField
                 name='doctorId'
                control={form.control}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>
                           Doctor ID
                        </FormLabel>
                        <FormControl>
                            <Select
                                placeholder='Select an Account'
                                options={doctorOptions}
                                onCreate={onCreateDoctor}
                                value={field.value}
                                onChange={field.onChange}
                                disabled={disabled}
                            />
                        </FormControl>
                    </FormItem>
                )}
                />
                
               <FormField
                 name='status'
                 control={form.control}
                 render={({field}) => (
                    <FormItem>
                        <FormLabel>
                          Status
                        </FormLabel>
                        <FormControl>
                            <Input
                            disabled={disabled}
                            placeholder='e.g. Food, Travel...'
                            {...field}
                            />
                        </FormControl>
                    </FormItem>
                 )}
                />

                <FormField
                name='department'
                control={form.control}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>
                           Department
                        </FormLabel>
                        <FormControl>
                            <Select
                                placeholder='Select a Department'
                                options={departmentOptions}
                                onCreate={onCreateDepartment}
                                value={field.value}
                                onChange={field.onChange}
                                disabled={disabled}
                            />
                        </FormControl>
                    </FormItem>
                )}
                />

                <FormField
                name='startTime'
                control={form.control}
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                        <DatePicker
                            value={field.value}
                            onChange={field.onChange}
                            disabled={disabled}
                        />
                    </FormControl>
                    </FormItem>
                )}
                />

                <FormField
                name='endTime'
                control={form.control}
                render={({field}) => (
                    <FormItem>
                        <FormLabel>
                           End Time
                        </FormLabel>
                        <FormControl>
                        <Input
                            disabled={disabled}
                            type='datetime-local'
                            value={formatDateToInput(field.value)}
                            onChange={(e) => field.onChange(parseDateFromInput(e.target.value))}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                        />
                        </FormControl>
                    </FormItem>
                )}
                />
                </div>
                <span className='w-full flex items-center justify-between gap-2'>
                    <Button 
                    variant={'ghost'}
                    className='w-full' 
                    disabled={disabled}
                    type='reset'
                    onClick={() => form.reset()}
                    >
                        Cancel
                    </Button>
                    <Button 
                    className='w-full' 
                    disabled={disabled}
                    type='submit'
                    onClick={form.handleSubmit(handleSubmit)}
                    >
                        {id ? "Save Changes" : "Create Appointment" }
                    </Button>
                </span>
                {!!id && (
                        <Button
                        disabled={disabled}
                        onClick={() => handleDelete()}
                        className='w-full text-red-600 border-red-600 hover:text-white hover:bg-red-600'
                        variant={'outline'}
                        type='button'
                        >
                            <Trash className='size-4 mr-2'/>
                            Delete Category
                        </Button>
                    )}
            </form>
        </Form>
    </div>
  )
}

export default AppointmentForm