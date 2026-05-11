import { motion } from 'motion/react';
import { Home, BarChart2, Bell, Settings } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function NavBar({ activeTab, onTabChange }: NavBarProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'history', label: 'History', icon: BarChart2 },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4 bg-white/70 backdrop-blur-xl border-t border-white/20 shadow-lg rounded-t-3xl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center px-4 py-1 haptic-bounce group relative",
              isActive ? "text-primary" : "text-on-surface-variant hover:text-primary transition-colors"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary-container/20 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Icon className={cn("w-6 h-6 mb-1 relative z-10", isActive && "fill-current")} />
            <span className="text-xs font-medium relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
