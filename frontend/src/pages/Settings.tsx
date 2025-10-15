import { useState } from "react";
import { User, Bell, Lock, Palette, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Settings = () => {
  // State for switches
  const [cycleReminders, setCycleReminders] = useState(false);
  const [dailyAffirmations, setDailyAffirmations] = useState(true);
  const [journalReminders, setJournalReminders] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className="mb-8 animate-fade-in">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
          Settings
        </h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-card animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Profile</h3>
              <p className="text-sm text-muted-foreground">Update your personal information</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
              <Input defaultValue="Alyssa" className="rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
              <Input defaultValue="alyssa@herhaven.com" type="email" className="rounded-xl" />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl mt-4">
              Save Changes
            </Button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-card animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Notifications</h3>
              <p className="text-sm text-muted-foreground">Manage your notification preferences</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
              <div>
                <p className="text-sm font-medium text-foreground">Cycle Reminders</p>
                <p className="text-xs text-muted-foreground">Get notified about upcoming periods</p>
              </div>
              <Switch checked={cycleReminders} onCheckedChange={setCycleReminders} />
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
              <div>
                <p className="text-sm font-medium text-foreground">Daily Affirmations</p>
                <p className="text-xs text-muted-foreground">Receive daily positive messages</p>
              </div>
              <Switch checked={dailyAffirmations} onCheckedChange={setDailyAffirmations} />
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
              <div>
                <p className="text-sm font-medium text-foreground">Journal Reminders</p>
                <p className="text-xs text-muted-foreground">Remind me to journal daily</p>
              </div>
              <Switch checked={journalReminders} onCheckedChange={setJournalReminders} />
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-card animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Privacy & Security</h3>
              <p className="text-sm text-muted-foreground">Keep your data safe</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full rounded-xl justify-start">
              Change Password
            </Button>
            <Button variant="outline" className="w-full rounded-xl justify-start">
              Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full rounded-xl justify-start text-destructive hover:text-destructive">
              Delete Account
            </Button>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-card animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Palette className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">Appearance</h3>
              <p className="text-sm text-muted-foreground">Customize your experience</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
              <div className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Dark Mode</p>
                  <p className="text-xs text-muted-foreground">Toggle dark theme</p>
                </div>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;