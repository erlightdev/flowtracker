"use client";

import { cn } from "@/lib/utils";

interface ContributionCellProps {
  count: number;
  date: string;
}

export function ContributionCell({ count, date }: ContributionCellProps) {
  const getIntensityClass = (count: number) => {
    if (count === 0) return "bg-muted hover:bg-muted/80";
    if (count <= 3) return "bg-chart-1/30 hover:bg-chart-1/40";
    if (count <= 6) return "bg-chart-1/50 hover:bg-chart-1/60";
    if (count <= 9) return "bg-chart-1/70 hover:bg-chart-1/80";
    return "bg-chart-1 hover:bg-chart-1/90";
  };

  return (
    <div
      className={cn(
        "w-3 h-3 rounded-sm transition-colors",
        getIntensityClass(count)
      )}
      title={`${count} contributions on ${date}`}
    />
  );
}