"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TimerDisplay } from "./timer-display";
import { TimerControls } from "./timer-controls";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

export function TimeTracker() {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [pausedTime, setPausedTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, isPaused]);

  const handleStart = async () => {
    if (isPaused) {
      // Resume from paused state
      setIsPaused(false);
      setStartTime(new Date(Date.now() - pausedTime * 1000));
    } else {
      // Fresh start
      setStartTime(new Date());
      setTime(0);
    }
    setIsRunning(true);
    try {
      await fetch('/api/time-entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description,
          startTime: startTime || new Date(),
        }),
      });
    } catch (error) {
      console.error('Failed to start time entry:', error);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      setIsPaused(true);
      setPausedTime(time);
    }
  };
  
  const handleStop = async () => {
    const totalTime = isPaused ? pausedTime : time;
    setIsRunning(false);
    setIsPaused(false);
    try {
      await fetch('/api/time-entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description,
          startTime: startTime,
          endTime: new Date(),
          duration: totalTime,
        }),
      });
    } catch (error) {
      console.error('Failed to save time entry:', error);
    }
    setTime(0);
    setPausedTime(0);
    setDescription("");
    setStartTime(null);
  };

  return (
    <Card className="border-none shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Time Tracker</CardTitle>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <TimerDisplay seconds={time} />
          <Input
            placeholder="What are you working on?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-background text-foreground border-input"
          />
          <TimerControls
            isRunning={isRunning}
            isPaused={isPaused}
            onStart={handleStart}
            onPause={handlePause}
            onStop={handleStop}
          />
        </div>
      </CardContent>
    </Card>
  );
}