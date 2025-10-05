import { Smile, Meh, Frown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const moods = [
  { icon: Smile, label: "Great", color: "text-accent-foreground" },
  { icon: Heart, label: "Good", color: "text-primary" },
  { icon: Meh, label: "Okay", color: "text-secondary-foreground" },
  { icon: Frown, label: "Low", color: "text-muted-foreground" },
];

export const JournalWidget = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [entry, setEntry] = useState("");

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card animate-fade-in">
      <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Daily Journal</h3>
      <p className="text-sm text-muted-foreground mb-6">How are you feeling today?</p>

      {/* Mood selector */}
      <div className="flex gap-3 mb-6">
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => setSelectedMood(index)}
            className={`flex-1 p-4 rounded-xl border-2 transition-all duration-200 ${
              selectedMood === index
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-border hover:border-primary/50 hover:bg-muted"
            }`}
          >
            <mood.icon className={`w-6 h-6 mx-auto ${mood.color}`} />
            <p className="text-xs mt-2 text-muted-foreground">{mood.label}</p>
          </button>
        ))}
      </div>

      {/* Journal entry */}
      <Textarea
        placeholder="Write about your day..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="mb-4 min-h-[100px] resize-none rounded-xl border-border focus:border-primary"
      />

      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-sm">
        Save Entry
      </Button>

      {/* Daily Affirmation */}
      <div className="mt-6 p-4 bg-gradient-soft rounded-xl border border-primary/10">
        <p className="text-xs text-muted-foreground mb-1">Today's Affirmation</p>
        <p className="text-sm font-medium text-foreground italic">
          "You are worthy of love, rest, and all the magic life has to offer."
        </p>
      </div>
    </div>
  );
};
