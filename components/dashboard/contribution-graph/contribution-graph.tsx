"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContributionCell } from "./contribution-cell";
import { format, subDays, eachDayOfInterval } from "date-fns";

// Generate sample contribution data
const generateContributions = () => {
  const today = new Date();
  const days = eachDayOfInterval({
    start: subDays(today, 364),
    end: today,
  });

  return days.map(day => ({
    date: format(day, "yyyy-MM-dd"),
    count: Math.floor(Math.random() * 12),
  }));
};

const contributions = generateContributions();
const days = ["Mon", "Wed", "Fri"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function ContributionGraph() {
  const weeks = [];
  for (let i = 0; i < 52; i++) {
    weeks.push(contributions.slice(i * 7, (i + 1) * 7));
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <div className="flex flex-col justify-between text-xs text-muted-foreground py-1">
            {days.map(day => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div>
            <div className="flex gap-2 mb-2">
              {months.map(month => (
                <span key={month} className="text-xs text-muted-foreground flex-1">
                  {month}
                </span>
              ))}
            </div>
            <div className="flex gap-[2px]">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[2px]">
                  {week.map((day) => (
                    <ContributionCell
                      key={day.date}
                      count={day.count}
                      date={day.date}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-xs text-muted-foreground">Less</span>
              <div className="flex gap-1">
                <ContributionCell count={0} date="" />
                <ContributionCell count={3} date="" />
                <ContributionCell count={6} date="" />
                <ContributionCell count={9} date="" />
                <ContributionCell count={12} date="" />
              </div>
              <span className="text-xs text-muted-foreground">More</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}