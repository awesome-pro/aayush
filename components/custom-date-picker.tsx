// components/CustomDatePicker.tsx

"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Custom Date Picker Component
interface CustomDatePickerProps {
  selectableDates: Date[];
}

export default function CustomDatePicker({ selectableDates }: CustomDatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const isDateSelectable = (date: Date) => {
    return selectableDates.some(selectableDate =>
      format(selectableDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            if (isDateSelectable(selectedDate!!)) {
              setDate(selectedDate);
            }
          }}
          initialFocus
          disabled={(date) => !isDateSelectable(date)}
        />
      </PopoverContent>
    </Popover>
  );
}
