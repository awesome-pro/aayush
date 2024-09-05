"use client"

import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { Edit, MoreHorizontal } from 'lucide-react';

type Props = {
    id: string;
}

function Actions({ id }: Props) {
    const handleEdit = () => {
        // Placeholder for edit logic
        console.log(`Editing department with ID: ${id}`);
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'ghost'} className='size-8 p-0'>
                        <MoreHorizontal className='size-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem
                        onClick={handleEdit} // Handle edit click
                        className='flex gap-1'
                    >
                        <Edit className='size-4' />
                        Edit
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export default Actions;
