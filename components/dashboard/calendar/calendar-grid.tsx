"use client";

import { Button } from "@/components/ui/button";

interface CalendarGridProps {
  days: string[];
  dates: number[];
  currentDate: number;
}

export function CalendarGrid({ days, dates, currentDate }: CalendarGridProps) {
  return (
    <div className="grid grid-cols-7 gap-4 text-center">
      {days.map((day) => (
        <div key={`header-${day}`} className="font-medium text-sm text-muted-foreground">
          {day}
        </div>
      ))}
      {dates.map((date, index) => {
        const isToday = date === currentDate;
        return (
          <Button
            key={`date-${index}`}
            variant={isToday ? "default" : "ghost"}
            className={`h-10 w-10 p-0 ${isToday ? "bg-orange-500 hover:bg-orange-600" : ""}`}
          >
            {date}
          </Button>
        );
      })}
    </div>
  );
}