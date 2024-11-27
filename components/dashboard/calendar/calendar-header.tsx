"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarHeaderProps {
  currentMonth: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export function CalendarHeader({ currentMonth, onPrevMonth, onNextMonth }: CalendarHeaderProps) {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" onClick={onPrevMonth}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="font-medium">{currentMonth}</span>
      <Button variant="ghost" size="icon" onClick={onNextMonth}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}