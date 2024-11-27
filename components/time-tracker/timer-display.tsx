"use client";

import { formatDuration } from "@/lib/utils";

interface TimerDisplayProps {
  seconds: number;
}

export function TimerDisplay({ seconds }: TimerDisplayProps) {
  return (
    <div className="text-4xl font-bold text-center">
      {formatDuration(seconds)}
    </div>
  );
}