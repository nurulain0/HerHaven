import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export const CalendarWidget = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock important dates
  const periodDates = [new Date(2025, 9, 8), new Date(2025, 9, 9), new Date(2025, 9, 10)];
  const ovulationDate = new Date(2025, 9, 22);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card animate-fade-in">
      <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Calendar</h3>
      <p className="text-sm text-muted-foreground mb-4">Track important dates</p>
      
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-xl border-0 pointer-events-auto"
      />

      <div className="mt-4 space-y-2 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-muted-foreground">Period Days</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full bg-accent"></div>
          <span className="text-muted-foreground">Ovulation</span>
        </div>
      </div>
    </div>
  );
};
