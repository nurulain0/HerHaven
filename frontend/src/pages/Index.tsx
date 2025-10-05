import { StatCard } from "@/components/StatCard";
import { CycleChart } from "@/components/CycleChart";
import { CalendarWidget } from "@/components/CalendarWidget";
import { JournalWidget } from "@/components/JournalWidget";
import { PregnancyWidget } from "@/components/PregnancyWidget";
import { CycleTrackerWidget } from "@/components/CycleTrackerWidget";
import { Calendar, Heart, Smile, Droplet } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
          Hi, Alyssa! ✨
        </h1>
        <p className="text-muted-foreground">Welcome back to your wellness dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Current Cycle Day"
          value={14}
          subtitle="Follicular Phase"
          icon={Droplet}
          variant="primary"
        />
        <StatCard
          title="Ovulation Day"
          value="Oct 22"
          subtitle="8 days away"
          icon={Calendar}
          variant="accent"
        />
        <StatCard
          title="Mood Today"
          value="Good"
          subtitle="Feeling energized"
          icon={Smile}
          variant="secondary"
        />
        <StatCard
          title="Wellness Score"
          value="8.5"
          subtitle="Excellent this week"
          icon={Heart}
          variant="primary"
        />
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <CycleChart />
        <CalendarWidget />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CycleTrackerWidget />
        <JournalWidget />
        <PregnancyWidget />
      </div>
    </>
  );
};

export default Index;
