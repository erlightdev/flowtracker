"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  BarChart2,
  Users,
  Calendar,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            FlowTracker
          </h2>
          <div className="space-y-1">
            <Link href="/">
              <Button
                variant={pathname === "/" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant={pathname === "/projects" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <BarChart2 className="mr-2 h-4 w-4" />
                Projects
              </Button>
            </Link>
            <Link href="/team">
              <Button
                variant={pathname === "/team" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Users className="mr-2 h-4 w-4" />
                Team
              </Button>
            </Link>
            <Link href="/calendar">
              <Button
                variant={pathname === "/calendar" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Calendar
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Settings
          </h2>
          <div className="space-y-1">
            <Link href="/settings">
              <Button
                variant={pathname === "/settings" ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}