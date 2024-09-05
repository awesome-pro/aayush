"use client";

import NewCategorySheet from '@/features/appointments/components/new-appointment-sheet';
import React, { useEffect, useState } from 'react';
import { useMountedState } from 'react-use';

function SheetProvider() {
    const isMounted = useMountedState();

    if (!isMounted) {
        //toast.error("Component is not mounted yet");
        console.log("Component is not mounted yet");

        return (
            <div className='bg-teal-600 p-8 w-full h-full'>
                <h1>
                    Mounted yet null
                </h1>
            </div>
        );
    }

    //console.log("Component is mounted");
    //toast.info("Component is mounted");

    return (
        <>
           <NewCategorySheet />
        </>
    );
}

export default SheetProvider;
