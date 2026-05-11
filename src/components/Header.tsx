import { motion } from 'motion/react';
import { Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=crop" 
            alt="User"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-xl font-bold text-primary tracking-tight">Fluid Vitality</span>
      </div>
      <button className="p-2 rounded-full hover:bg-primary/10 transition-colors text-primary haptic-bounce">
        <Bell className="w-6 h-6" />
      </button>
    </header>
  );
}
