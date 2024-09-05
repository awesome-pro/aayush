"use client"

import { ColumnDef } from "@tanstack/react-table"
import { formatTimestamp } from "@/lib/utils"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Medicine } from "@/backend/models/medicine"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<Medicine>[] = [
  {
    accessorKey: "_id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "patientID",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Patient ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "patientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Patient Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "bedNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Bed Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "doctorID",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Doctor ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "doctorName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Doctor Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "departmentID",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Department ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "admissionTime",
    header: () => <div className="">Start Time</div>,
    cell: ({ row, column }) => {
      const startTime = String(row.getValue("startTime"))
      const formatted = formatTimestamp(startTime);

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "dischargeTime",
    header: () => <div className="">Discha Time</div>,
    cell: ({ row }) => {
      const endTime = String(row.getValue("endTime"))
      const formatted = formatTimestamp(endTime);
      
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
