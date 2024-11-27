"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  { name: "Layla", image: "https://i.pravatar.cc/150?img=1", status: "Morning" },
  { name: "Sarah", image: "https://i.pravatar.cc/150?img=2", status: "Active" },
  { name: "Mike", image: "https://i.pravatar.cc/150?img=3", status: "Away" },
  { name: "John", image: "https://i.pravatar.cc/150?img=4", status: "Active" },
];

export function TeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={member.image} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.status}</p>
                </div>
              </div>
              <div className={`w-2 h-2 rounded-full ${
                member.status === "Active" ? "bg-green-500" :
                member.status === "Away" ? "bg-yellow-500" : "bg-gray-500"
              }`} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}