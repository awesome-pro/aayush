import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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
