"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  { name: "Website Redesign", hours: 12 },
  { name: "Mobile App", hours: 8 },
  { name: "API Integration", hours: 6 },
  { name: "Documentation", hours: 4 },
];

export function ProjectsOverview() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Projects Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex items-center justify-between p-4 rounded-lg bg-muted"
              >
                <span className="font-medium">{project.name}</span>
                <span className="text-sm text-muted-foreground">
                  {project.hours}h
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}