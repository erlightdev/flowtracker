"use client";

import { Button } from "@/components/ui/button";
import { Play, Pause, StopCircle } from "lucide-react";

interface TimerControlsProps {
  isRunning: boolean;
  isPaused?: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}

export function TimerControls({ 
  isRunning, 
  isPaused = false, 
  onStart, 
  onPause, 
  onStop 
}: TimerControlsProps) {
  return (
    <div className="flex justify-center space-x-2">
      {!isRunning ? (
        <Button onClick={onStart} variant="default">
          <Play className="mr-2 h-4 w-4" />
          Start
        </Button>
      ) : (
        <>
          {!isPaused ? (
            <Button onClick={onPause} variant="secondary">
              <Pause className="mr-2 h-4 w-4" />
              Pause
            </Button>
          ) : (
            <Button onClick={onStart} variant="default">
              <Play className="mr-2 h-4 w-4" />
              Resume
            </Button>
          )}
        </>
      )}
      <Button onClick={onStop} variant="destructive">
        <StopCircle className="mr-2 h-4 w-4" />
        Stop
      </Button>
    </div>
  );
}