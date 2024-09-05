"use client"

import { Department } from "@/backend/models/department" // Assuming you have a Department model
import { ColumnDef } from "@tanstack/react-table"
import { formatTimestamp } from "@/lib/utils"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Actions from "./actions"

// Define the columns for Department
export const columns: ColumnDef<Department>[] = [
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
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Department Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "doctors",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Doctors
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const doctors = row.getValue("doctors") as string[]
      return <div className="text-left">{doctors?.length ? doctors.join(", ") : "No doctors"}</div>
    },
  },
  {
    accessorKey: "maxBeds",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Max Beds
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const maxBeds = row.getValue("maxBeds")
    //   return <div className="text-right">{maxBeds}</div>
    },
  },
  {
    accessorKey: "admittedPatientIds",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Admitted Patients
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const admittedPatients = row.getValue("admittedPatientIds") as string[]
      return <div className="text-left">{admittedPatients?.length ? admittedPatients.join(", ") : "No patients"}</div>
    },
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string
      return (
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt="Department Image"
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
      )
    },
  },
]
