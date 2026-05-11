import { motion } from 'motion/react';
import { User, Bell, Bluetooth as Tooth, Smartphone, Globe, Shield, LogOut, ChevronRight, Moon, Timer, Volume2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { UserSettings } from '../types';

interface SettingsProps {
  settings: UserSettings;
  onUpdate: (settings: Partial<UserSettings>) => void;
}

export function Settings({ settings, onUpdate }: SettingsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-32 pt-24 px-6 space-y-10 max-w-lg mx-auto"
    >
      <header>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-on-surface-variant font-medium">Manage your profile and reminders</p>
      </header>

      <section className="space-y-4">
        <div className="glass-card p-6 rounded-3xl space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary">Personal Details</h2>
            <button className="text-primary text-sm font-bold hover:opacity-70 transition-opacity">Edit</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface-container-low rounded-2xl">
              <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Weight</p>
              <p className="text-xl font-bold">{settings.weight} <span className="text-sm font-normal">kg</span></p>
            </div>
            <div className="p-4 bg-surface-container-low rounded-2xl">
              <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Activity</p>
              <p className="text-xl font-bold capitalize">{settings.activityLevel}</p>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant italic font-medium">
            Based on your activity, we recommend {(settings.goal / 1000).toFixed(1)}L of water daily.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold">Smart Reminders</h2>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={settings.notificationsEnabled} 
              onChange={(e) => onUpdate({ notificationsEnabled: e.target.checked })}
              className="sr-only peer" 
            />
            <div className="w-14 h-8 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>

        <div className="space-y-4">
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Moon className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Quiet Hours</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-center">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Wake Up</label>
                <div className="p-3 bg-surface-container-low rounded-xl border border-white/40 font-bold text-lg">
                  {settings.wakeUpTime}
                </div>
              </div>
              <div className="space-y-2 text-center">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Sleep</label>
                <div className="p-3 bg-surface-container-low rounded-xl border border-white/40 font-bold text-lg">
                  {settings.sleepTime}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Timer className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Frequency</span>
              </div>
              <span className="text-lg font-bold text-primary">Every {settings.frequency}h</span>
            </div>
            <input 
              type="range" 
              min="0.5" 
              max="4" 
              step="0.5" 
              value={settings.frequency}
              onChange={(e) => onUpdate({ frequency: parseFloat(e.target.value) })}
              className="w-full accent-primary h-1.5 bg-surface-container-highest rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              <span>Every 1h</span>
              <span>Every 4h</span>
            </div>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden divide-y divide-white/20">
            <button className="w-full p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold">Notification Sounds</span>
              </div>
              <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Tooth className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold">Haptic Feedback</span>
              </div>
              <div className="w-10 h-6 bg-primary rounded-full relative p-1 shadow-inner">
                <div className="absolute right-1 w-4 h-4 bg-white rounded-full transition-all" />
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold px-2">Account</h2>
        <div className="glass-card rounded-3xl overflow-hidden divide-y divide-white/20">
          <button className="w-full p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors group">
            <span className="font-bold">Unit System</span>
            <span className="text-sm font-bold text-primary">Metric (ml/kg)</span>
          </button>
          <button className="w-full p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors group">
            <span className="font-bold">Data Privacy</span>
            <ChevronRight className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button className="w-full p-4 flex items-center justify-between hover:bg-red-500/10 transition-colors group">
            <span className="font-bold text-red-500">Logout</span>
            <LogOut className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <p className="text-center text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] py-8">
          Version 2.4.0 (Fluid-V)
        </p>
      </section>
    </motion.div>
  );
}
