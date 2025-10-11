import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export const StatCard = ({ title, value, subtitle, icon: Icon, variant = "primary", className }: StatCardProps) => {
  const variantStyles = {
    primary: "from-primary/20 to-primary/5 border-primary/20",
    secondary: "from-secondary/20 to-secondary/5 border-secondary/20",
    accent: "from-accent/20 to-accent/5 border-accent/20",
  };

  const iconStyles = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary-foreground",
    accent: "bg-accent/10 text-accent-foreground",
  };

  return (
    <div
      className={cn(
        "bg-gradient-to-br border rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 animate-fade-in",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", iconStyles[variant])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
      <p className="text-3xl font-serif font-semibold text-foreground mb-1">{value}</p>
      {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
    </div>
  );
};
