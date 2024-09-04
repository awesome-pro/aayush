"use client";

import { Appointment } from "@/backend/models/appointment";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function Appointments() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={appointments} />
        </div>
    );
}

export default Appointments;
