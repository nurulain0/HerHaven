import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Day 1", mood: 3, energy: 4 },
  { day: "Day 5", mood: 4, energy: 5 },
  { day: "Day 10", mood: 5, energy: 6 },
  { day: "Day 14", mood: 6, energy: 7 },
  { day: "Day 18", mood: 5, energy: 5 },
  { day: "Day 22", mood: 4, energy: 4 },
  { day: "Day 28", mood: 3, energy: 3 },
];

export const CycleChart = () => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-card animate-fade-in">
      <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Cycle Progress</h3>
      <p className="text-sm text-muted-foreground mb-6">Tracking your mood and energy levels</p>
      
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="day" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '12px',
              padding: '12px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="mood" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--primary))', r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Line 
            type="monotone" 
            dataKey="energy" 
            stroke="hsl(var(--secondary))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--secondary))', r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex gap-6 mt-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-sm text-muted-foreground">Mood</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary"></div>
          <span className="text-sm text-muted-foreground">Energy</span>
        </div>
      </div>
    </div>
  );
};
