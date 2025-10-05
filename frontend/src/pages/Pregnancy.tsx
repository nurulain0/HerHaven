import { PregnancyWidget } from "@/components/PregnancyWidget";
import { CalendarWidget } from "@/components/CalendarWidget";

const Pregnancy = () => {
  return (
    <>
      <div className="mb-8 animate-fade-in">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
          Pregnancy Journey
        </h1>
        <p className="text-muted-foreground">Track your pregnancy week by week</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PregnancyWidget />
        <CalendarWidget />
      </div>
    </>
  );
};

export default Pregnancy;
