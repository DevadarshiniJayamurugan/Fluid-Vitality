import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Activity, TrendingUp, Zap, Dumbbell, Trophy, Thermometer, Sun, Flame, Check } from 'lucide-react';
import { ActivityLevel, Climate, UserSettings } from '../types';
import { calculateGoal } from '../constants';
import { cn } from '../lib/utils';

interface OnboardingProps {
  onComplete: (settings: UserSettings) => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [weight, setWeight] = useState(70);
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [climate, setClimate] = useState<Climate>('moderate');

  const currentGoal = calculateGoal(weight, activity, climate);

  const activityOptions: { id: ActivityLevel; title: string; desc: string; icon: any }[] = [
    { id: 'sedentary', title: 'Sedentary', desc: 'Office work, minimal movement', icon: Activity },
    { id: 'moderate', title: 'Moderate', desc: 'Daily walks or light exercise', icon: Zap },
    { id: 'active', title: 'Active', desc: 'Intense training 3-5 days/week', icon: Dumbbell },
    { id: 'athlete', title: 'Athlete', desc: 'Elite performance or heavy labor', icon: Trophy },
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete({
        weight,
        activityLevel: activity,
        climate,
        goal: currentGoal,
        notificationsEnabled: true,
        wakeUpTime: '07:00',
        sleepTime: '22:30',
        frequency: 1.5,
      });
    }
  };

  return (
    <div className="min-h-screen px-6 py-8 flex flex-col max-w-lg mx-auto">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-bold text-primary">Fluid Vitality</h1>
          <p className="text-sm font-medium text-on-surface-variant">Setup your hydration journey</p>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-primary/10 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-primary" />
        </div>
      </header>

      <nav className="flex items-center gap-2 mb-12">
        {[1, 2, 3].map((s) => (
          <div 
            key={s} 
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              s === step ? "w-10 bg-primary" : "w-4 bg-surface-container-highest"
            )} 
          />
        ))}
      </nav>

      <div className="flex-1 space-y-12">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.section
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold leading-tight">What is your weight?</h2>
              <p className="text-on-surface-variant font-medium">We use this to calculate your baseline hydration needs.</p>
              <div className="glass-card rounded-3xl p-8 shadow-md">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Current Weight</span>
                  <div className="bg-surface-container-low p-1 rounded-full flex gap-1">
                    <button className="bg-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm text-primary">kg</button>
                    <button className="px-4 py-1.5 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">lbs</button>
                  </div>
                </div>
                <div className="flex items-baseline justify-center gap-2 py-8 border-b border-primary/10">
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value) || 0)}
                    className="w-32 text-center text-6xl font-extrabold text-primary bg-transparent border-none focus:ring-0 placeholder:text-surface-container-highest"
                  />
                  <span className="text-2xl font-bold text-on-surface-variant">kg</span>
                </div>
              </div>
            </motion.section>
          )}

          {step === 2 && (
            <motion.section
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold leading-tight">How active are you?</h2>
              <p className="text-on-surface-variant font-medium">Exercise increases your body's demand for fluid replenishment.</p>
              <div className="grid grid-cols-1 gap-4">
                {activityOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isActive = activity === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setActivity(opt.id)}
                      className={cn(
                        "glass-card p-4 rounded-2xl flex items-center gap-4 transition-all text-left group haptic-bounce border-2",
                        isActive ? "border-primary bg-primary/5" : "border-transparent"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                        isActive ? "bg-primary text-white" : "bg-primary/10 text-primary"
                      )}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className={cn("font-bold text-lg transition-colors", isActive ? "text-primary" : "text-on-surface")}>
                          {opt.title}
                        </p>
                        <p className="text-xs font-medium text-on-surface-variant">{opt.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.section>
          )}

          {step === 3 && (
            <motion.section
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold leading-tight">Climate selection</h2>
              <p className="text-on-surface-variant font-medium">Heat and humidity significantly impact fluid loss.</p>
              
              <div className="space-y-8">
                <div className="flex justify-between px-4">
                  {[
                    { id: 'cold', icon: Zap, label: 'Cold' },
                    { id: 'moderate', icon: Sun, label: 'Moderate' },
                    { id: 'hot', icon: Flame, label: 'Hot' }
                  ].map((c) => {
                    const Icon = c.icon;
                    const isActive = climate === c.id;
                    return (
                      <button 
                        key={c.id} 
                        onClick={() => setClimate(c.id as Climate)}
                        className="flex flex-col items-center gap-2 group transition-all"
                      >
                        <div className={cn(
                          "w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all haptic-bounce",
                          isActive ? "border-primary bg-primary text-white shadow-lg" : "border-primary/10 bg-white text-primary/40 group-hover:bg-primary/5"
                        )}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className={cn("text-xs font-bold transition-all", isActive ? "text-primary scale-110" : "text-on-surface-variant")}>
                          {c.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="glass-card p-6 rounded-3xl bg-primary/5 border-primary/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary rounded-xl text-white shadow-sm">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Goal Preview</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-primary">{currentGoal.toLocaleString()}</span>
                    <span className="text-lg font-bold text-on-surface-variant">ml / day</span>
                  </div>
                  <p className="text-xs font-semibold text-on-surface-variant mt-2">
                    Based on your {weight}kg weight, {activity} activity, and {climate} climate.
                  </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-12">
        <button 
          onClick={handleNext}
          className="w-full bg-primary text-white font-bold py-5 rounded-3xl shadow-xl shadow-primary/20 haptic-bounce flex items-center justify-center gap-3 group overflow-hidden relative"
        >
          <span className="relative z-10">{step === 3 ? 'Calculate My Goal' : 'Continue'}</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
          <motion.div 
            className="absolute inset-0 bg-white/10 -translate-x-full"
            whileHover={{ translateX: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </button>
      </div>

      {/* Decorative background elements */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-tertiary-fixed/10 blur-[100px] rounded-full -z-10" />
    </div>
  );
}
