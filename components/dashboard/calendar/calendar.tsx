"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarHeader } from "./calendar-header";
import { CalendarGrid } from "./calendar-grid";
import { format } from "date-fns";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const currentDate = new Date();

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(format(currentDate, "MMMM"));
  const dates = Array.from({ length: 35 }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    // Add month navigation logic
  };

  const handleNextMonth = () => {
    // Add month navigation logic
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Calendar</CardTitle>
        <CalendarHeader
          currentMonth={currentMonth}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
      </CardHeader>
      <CardContent>
        <CalendarGrid
          days={days}
          dates={dates}
          currentDate={currentDate.getDate()}
        />
      </CardContent>
    </Card>
  );
}