import { Baby, Calendar, Heart } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const PregnancyWidget = () => {
  const currentWeek = 24;
  const totalWeeks = 40;
  const progress = (currentWeek / totalWeeks) * 100;

  return (
    <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 rounded-2xl p-6 shadow-card animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
          <Baby className="w-6 h-6 text-secondary-foreground" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground">Your Journey</h3>
          <p className="text-sm text-muted-foreground">Week {currentWeek} of {totalWeeks}</p>
        </div>
      </div>

      <Progress value={progress} className="mb-6 h-2" />

      <div className="space-y-4">
        <div className="flex items-start gap-3 p-3 bg-card/50 rounded-xl">
          <Heart className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Baby's Size</p>
            <p className="text-xs text-muted-foreground">About the size of a cantaloupe</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-card/50 rounded-xl">
          <Calendar className="w-5 h-5 text-accent-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Next Milestone</p>
            <p className="text-xs text-muted-foreground">Third trimester begins in 3 weeks</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-gradient-magical/10 rounded-xl">
        <p className="text-xs text-muted-foreground mb-1">Development Update</p>
        <p className="text-sm text-foreground">
          Baby can hear your voice and recognize it! Their lungs are developing rapidly.
        </p>
      </div>
    </div>
  );
};
