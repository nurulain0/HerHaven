import { Droplet, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CycleTrackerWidget = () => {
  return (
    <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-6 shadow-card animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Droplet className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground">Cycle Status</h3>
          <p className="text-sm text-muted-foreground">Day 14 of your cycle</p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between p-3 bg-card/50 rounded-xl">
          <div className="flex items-center gap-2">
            <Moon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Period Start</span>
          </div>
          <span className="text-sm text-muted-foreground">Oct 8</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-card/50 rounded-xl">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-accent-foreground" />
            <span className="text-sm font-medium text-foreground">Ovulation</span>
          </div>
          <span className="text-sm text-muted-foreground">Oct 22 (predicted)</span>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Log Symptoms</label>
        <Input 
          placeholder="e.g., cramps, mood swings, headache..." 
          className="rounded-xl border-border focus:border-primary"
        />
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-sm">
          Save Symptoms
        </Button>
      </div>
    </div>
  );
};
