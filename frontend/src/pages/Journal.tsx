import { JournalWidget } from "@/components/JournalWidget";
import { BookHeart } from "lucide-react";

const Journal = () => {
  return (
    <>
      <div className="mb-8 animate-fade-in">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
          Daily Journal
        </h1>
        <p className="text-muted-foreground">Reflect on your day and track your emotions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <JournalWidget />
        
        <div className="bg-card border border-border rounded-2xl p-6 shadow-card animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <BookHeart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Recent Entries</h3>
              <p className="text-sm text-muted-foreground">Your wellness journey</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { date: "Oct 5, 2025", mood: "Great", preview: "Had a wonderful day! Felt energized and productive..." },
              { date: "Oct 4, 2025", mood: "Good", preview: "Taking time for self-care today. Yoga session was refreshing..." },
              { date: "Oct 3, 2025", mood: "Okay", preview: "A bit tired but staying positive. Rest is important..." },
            ].map((entry, i) => (
              <div key={i} className="p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{entry.date}</span>
                  <span className="text-xs text-muted-foreground">{entry.mood}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{entry.preview}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Journal;
