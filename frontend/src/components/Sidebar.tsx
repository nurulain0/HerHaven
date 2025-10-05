import { Home, Calendar, Baby, BookHeart, Settings, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Cycle Tracker", icon: Calendar, path: "/cycle" },
  { title: "Pregnancy", icon: Baby, path: "/pregnancy" },
  { title: "Journal", icon: BookHeart, path: "/journal" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-card border-r border-border flex flex-col shadow-sm transition-all duration-300">
      {/* Logo */}
      <div className="p-4 lg:p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-magical flex items-center justify-center shadow-soft">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="hidden lg:block font-serif text-2xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            HerHaven
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 lg:p-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 lg:px-4 py-3 rounded-xl transition-all duration-200 group",
                isActive
                  ? "bg-primary/10 text-primary font-medium shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive && "text-primary")} />
                <span className="hidden lg:block text-sm">{item.title}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 lg:p-6 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-medium shadow-soft">
            A
          </div>
          <div className="hidden lg:block">
            <p className="text-sm font-medium text-foreground">Alyssa</p>
            <p className="text-xs text-muted-foreground">View Profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
