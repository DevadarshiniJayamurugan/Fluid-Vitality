import { motion } from 'motion/react';
import { Plus, Flame, Droplet, FlaskConical, Beer, Edit2, Sliders } from 'lucide-react';
import { cn } from '../lib/utils';

interface DashboardProps {
  currentIntake: number;
  goal: number;
  onLog: (amount: number) => void;
}

export function Dashboard({ currentIntake, goal, onLog }: DashboardProps) {
  const percentage = Math.min(Math.round((currentIntake / goal) * 100), 100);
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const quickLogs = [
    { amount: 250, label: 'Small Glass', icon: Droplet },
    { amount: 500, label: 'Standard Bottle', icon: FlaskConical },
    { amount: 750, label: 'Large Flask', icon: Beer },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-32 pt-24 px-6 space-y-12 max-w-lg mx-auto"
    >
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm font-medium text-on-surface-variant">Good Morning, Alex</p>
          <h1 className="text-3xl font-bold">Daily Hydration</h1>
        </div>
        <div className="flex items-center gap-2 bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-full shadow-sm">
          <Flame className="w-5 h-5 fill-current" />
          <span className="text-sm font-bold">12 Day Streak</span>
        </div>
      </div>

      {/* Progress Ring */}
      <div className="relative flex justify-center py-8">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-3xl">
          <div className="w-64 h-64 rounded-full bg-primary animate-pulse" />
        </div>
        
        <div className="relative w-72 h-72">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="144"
              cy="144"
              r={radius}
              fill="transparent"
              stroke="currentColor"
              strokeWidth="20"
              className="text-primary/10"
            />
            <motion.circle
              cx="144"
              cy="144"
              r={radius}
              fill="transparent"
              stroke="currentColor"
              strokeWidth="20"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-primary"
              strokeLinecap="round"
            />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <motion.span 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-6xl font-extrabold text-primary"
            >
              {percentage}%
            </motion.span>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-2xl font-bold">{(currentIntake / 1000).toFixed(1)}L</span>
              <span className="text-sm text-on-surface-variant font-medium">/ {(goal / 1000).toFixed(1)}L</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider text-center">Quick Log</h2>
        <div className="grid grid-cols-3 gap-4">
          {quickLogs.map((log) => {
            const Icon = log.icon;
            return (
              <button
                key={log.amount}
                onClick={() => onLog(log.amount)}
                className="glass-card flex flex-col items-center justify-center p-4 rounded-2xl haptic-bounce group hover:shadow-md transition-all active:bg-primary/5"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-3 group-hover:bg-primary-container/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-bold">{log.amount}ml</span>
                <span className="text-[10px] text-on-surface-variant font-medium">{log.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="glass-card p-6 rounded-3xl flex items-center justify-between group haptic-bounce cursor-pointer overflow-hidden relative">
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim flex items-center justify-center">
            <Sliders className="w-6 h-6 text-on-tertiary-fixed" />
          </div>
          <div>
            <h3 className="font-bold">Custom Amount</h3>
            <p className="text-sm text-on-surface-variant">Log a specific volume</p>
          </div>
        </div>
        <button className="p-3 rounded-full bg-primary text-white shadow-lg relative z-10">
          <Plus className="w-6 h-6" />
        </button>
        <div className="absolute inset-0 bg-primary/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
      </div>

      {/* FAB */}
      <button className="fixed bottom-32 right-6 w-14 h-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center z-40 haptic-bounce hover:shadow-primary/30 active:rotate-12 transition-all">
        <Edit2 className="w-6 h-6" />
      </button>
    </motion.div>
  );
}
