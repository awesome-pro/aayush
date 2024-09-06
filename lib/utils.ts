import { Doctor, TimeSlot } from "@/backend/models/doctor";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);

  // Extract day, month, year, hours, and minutes
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  // Return formatted string
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export function formatDateToInput(date: Date): string {
  if (!date) return ''; // Handle undefined or null date values
  return new Date(date).toISOString().slice(0, 16); // 'YYYY-MM-DDTHH:MM'
}

export function parseDateFromInput(value: string): Date {
  const date = new Date(value);
  if (isNaN(date.getTime())) {
    return new Date(); // Return current date if invalid
  }
  return date;
}

export function checkAvailableDatesFromToday(doctor: Doctor, weeksAhead: number = 4): Date[] {
  const today = new Date();
  const availableDates: Date[] = [];

  // Day index mapping
  const dayIndexMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  // Loop through each availability slot of the doctor
  doctor.availability?.forEach(slot => {
    const day = slot.day.toLowerCase();
    const todayIndex = today.getDay();
    const dayIndex = dayIndexMap.indexOf(day);

    // Calculate days until the next occurrence of the available day
    const diff = (dayIndex + 7 - todayIndex) % 7;

    // Loop through weeksAhead to get dates for future weeks
    for (let i = 0; i < weeksAhead; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + diff + i * 7);
      availableDates.push(date);
    }
  });

  return availableDates;
}

export function getAvailableTimeSlotsOnDate(doctor: Doctor, date: Date): string[] {
  const day = dayjs(date).format('dddd').toLowerCase(); // Correct dayjs usage
  const daySlot = doctor.availability?.find(slot => slot.day.toLowerCase() === day);

  if (!daySlot) return []; // If no availability for the day, return empty array

  const timeSlots: string[] = [];
  
  // Loop through available slots and return both start and end times
  daySlot.slots.forEach(slot => {
    timeSlots.push(`${slot.startTime} - ${slot.endTime}`); // Include start and end time
  });

  return timeSlots;
}

export function findAvailableSlots(doctor: Doctor, date: Date): TimeSlot[] {
  const day = dayjs(date).format('dddd').toLowerCase(); // Correct dayjs usage
  const daySlot = doctor.availability?.find(slot => slot.day.toLowerCase() === day);

  if (!daySlot || !Array.isArray(daySlot.slots)) return []; // Handle no availability or invalid slots structure

  return daySlot.slots;
}


