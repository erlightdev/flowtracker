"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const currentDate = new Date();

export function Calendar() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Calendar</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-medium">June</span>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-4 text-center">
          {days.map((day) => (
            <div key={day} className="font-medium text-sm text-muted-foreground">
              {day}
            </div>
          ))}
          {Array.from({ length: 35 }).map((_, i) => {
            const date = i + 1;
            const isToday = date === currentDate.getDate();
            return (
              <Button
                key={i}
                variant={isToday ? "default" : "ghost"}
                className={`h-10 w-10 p-0 ${isToday ? "bg-orange-500 hover:bg-orange-600" : ""}`}
              >
                {date}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}