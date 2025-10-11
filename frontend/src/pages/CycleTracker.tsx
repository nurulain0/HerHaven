import { CycleTrackerWidget } from "@/components/CycleTrackerWidget";
import { CycleChart } from "@/components/CycleChart";
import { CalendarWidget } from "@/components/CalendarWidget";

const CycleTracker = () => {
  return (
    <>
      <div className="mb-8 animate-fade-in">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
          Cycle Tracker
        </h1>
        <p className="text-muted-foreground">Monitor your menstrual cycle and symptoms</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CycleTrackerWidget />
        <CalendarWidget />
      </div>

      <div className="mt-6">
        <CycleChart />
      </div>
    </>
  );
};

export default CycleTracker;
