import { Calendar } from "@/components/dashboard/calendar/calendar";
import { TimeTracker } from "@/components/time-tracker/time-tracker";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { ProjectsOverview } from "@/components/dashboard/projects-overview";
import { ContributionGraph } from "@/components/dashboard/contribution-graph/contribution-graph";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <TimeTracker />
            <ContributionGraph />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Calendar />
              <ActivityChart />
            </div>
          </div>
          <div className="lg:col-span-4">
            <ProjectsOverview />
          </div>
        </div>
      </main>
    </div>
  );
}