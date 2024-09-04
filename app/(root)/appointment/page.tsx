"use client";
import { useEffect, useState } from 'react';

interface Appointment {
    patientId: string;
    patientName: string;
    doctorId: string;
    doctorName: string;
    department: string;
    startTime: Date;
    endTime: Date;
    status: string;
    notes?: string[];
}

interface SortConfig {
    key: keyof Appointment;
    direction: 'ascending' | 'descending';
}

const dummyAppointments: Appointment[] = [
    {
        patientId: '1',
        patientName: 'John Doe',
        doctorId: '101',
        doctorName: 'Dr. Smith',
        department: 'Cardiology',
        startTime: new Date('2024-09-04T09:00:00'),
        endTime: new Date('2024-09-04T09:30:00'),
        status: 'Scheduled',
    },
    {
        patientId: '2',
        patientName: 'Jane Roe',
        doctorId: '102',
        doctorName: 'Dr. Johnson',
        department: 'Neurology',
        startTime: new Date('2024-09-04T10:00:00'),
        endTime: new Date('2024-09-04T10:45:00'),
        status: 'Completed',
    },
    {
        patientId: '3',
        patientName: 'Alice Brown',
        doctorId: '103',
        doctorName: 'Dr. Williams',
        department: 'Orthopedics',
        startTime: new Date('2024-09-04T11:00:00'),
        endTime: new Date('2024-09-04T11:30:00'),
        status: 'Cancelled',
    },
    {
        patientId: '4',
        patientName: 'Bob White',
        doctorId: '104',
        doctorName: 'Dr. Davis',
        department: 'Dermatology',
        startTime: new Date('2024-09-04T12:00:00'),
        endTime: new Date('2024-09-04T12:30:00'),
        status: 'Scheduled',
    },
    {
        patientId: '5',
        patientName: 'Carol Green',
        doctorId: '105',
        doctorName: 'Dr. Miller',
        department: 'Pediatrics',
        startTime: new Date('2024-09-04T13:00:00'),
        endTime: new Date('2024-09-04T13:30:00'),
        status: 'Completed',
    },
];

const AppointmentPage: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>(dummyAppointments);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'patientName', direction: 'ascending' });

    const sortAppointments = (key: keyof Appointment) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });

        const sortedData = [...appointments].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
            return 0;
        });

        setAppointments(sortedData);
    };

    return (
        <div className="container mx-auto mt-8 p-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Appointments</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-100 text-gray-700 border-b border-gray-300">
                        <tr>
                            {['patientName', 'doctorName', 'department', 'startTime', 'endTime', 'status'].map((key) => (
                                <th
                                    key={key}
                                    className="px-6 py-3 text-left cursor-pointer hover:bg-gray-200"
                                    onClick={() => sortAppointments(key as keyof Appointment)}
                                >
                                    <div className="flex items-center">
                                        <span className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                        {sortConfig.key === key && (
                                            <svg
                                                className={`ml-2 w-4 h-4 ${sortConfig.direction === 'ascending' ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {appointments.map((appointment) => (
                            <tr key={appointment.patientId} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{appointment.patientName}</td>
                                <td className="px-6 py-4">{appointment.doctorName}</td>
                                <td className="px-6 py-4">{appointment.department}</td>
                                <td className="px-6 py-4">{new Date(appointment.startTime).toLocaleString()}</td>
                                <td className="px-6 py-4">{new Date(appointment.endTime).toLocaleString()}</td>
                                <td className="px-6 py-4">{appointment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentPage;
