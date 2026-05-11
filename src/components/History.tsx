import { motion } from 'motion/react';
import { Check, Info, Award, Calendar, Users, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

export function History() {
  const weeklyData = [
    { day: 'Mon', value: 100, label: '100%', completed: true },
    { day: 'Tue', value: 92, label: '92%', completed: true },
    { day: 'Wed', value: 60, label: '60%', completed: false },
    { day: 'Thu', value: 110, label: '110%', completed: true },
    { day: 'Fri', value: 25, label: '25%', completed: false },
    { day: 'Sat', value: 0, label: '0%', completed: false },
    { day: 'Sun', value: 48, label: 'Active', completed: false, active: true },
  ];

  const monthlyData = [
    { week: 'Week 1', amount: 1.8 },
    { week: 'Week 2', amount: 2.2 },
    { week: 'Week 3', amount: 1.4 },
    { week: 'Week 4', amount: 2.8 },
    { week: 'Week 5', amount: 2.0 },
  ];

  const milestones = [
    { title: '3-Day Streak', desc: 'Consistency is key to clarity.', icon: Zap, achieved: true },
    { title: 'Hydration Hero', desc: 'Exceeded 100L total intake.', icon: Award, achieved: true },
    { title: 'Full Moon', desc: 'Complete 30 days of tracking.', icon: Calendar, achieved: false },
    { title: 'Social Wave', desc: 'Share your progress with a friend.', icon: Users, achieved: false },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-32 pt-24 px-6 space-y-10 max-w-lg mx-auto"
    >
      <section>
        <h2 className="text-3xl font-bold">Hydration History</h2>
        <p className="text-on-surface-variant mt-2 font-medium">Visualizing your journey to clarity.</p>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h3 className="text-xl font-bold text-primary">Last 7 Days</h3>
          <span className="text-xs font-bold text-on-surface-variant">Daily Goal: 2.5L</span>
        </div>
        <div className="glass-card p-6 rounded-3xl shadow-sm">
          <div className="flex justify-between items-center">
            {weeklyData.map((day) => (
              <div key={day.day} className="flex flex-col items-center gap-3">
                <span className={day.active ? "text-xs font-bold text-primary" : "text-xs font-medium text-on-surface-variant"}>
                  {day.day}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  day.active ? "border-2 border-dashed border-primary animate-pulse" :
                  day.completed ? "bg-primary text-white shadow-md shadow-primary/20" :
                  day.value > 0 ? "bg-primary/20 text-primary font-bold text-[10px]" : "bg-primary/5"
                }`}>
                  {day.completed ? <Check className="w-5 h-5" /> : day.value > 0 ? <span>{day.value}%</span> : null}
                </div>
                <span className={`text-[10px] font-bold ${day.active || day.completed ? "text-primary" : "text-on-surface-variant/60"}`}>
                  {day.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-primary">Monthly Overview</h3>
        <div className="glass-card p-6 rounded-3xl shadow-sm h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <XAxis 
                dataKey="week" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#414755', fontSize: 10, fontWeight: 500 }} 
                dy={10}
              />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="amount" radius={[20, 20, 0, 0]}>
                {monthlyData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.amount > 2.5 ? '#0058bc' : '#d2e0fe'} 
                    className="hover:opacity-80 transition-opacity"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold text-primary">Milestones</h3>
        <div className="grid grid-cols-1 gap-4">
          {milestones.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <div 
                key={milestone.title} 
                className={`glass-card p-4 rounded-2xl flex items-center gap-4 transition-all ${!milestone.achieved && "opacity-60"}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${
                  milestone.achieved ? "bg-gradient-to-br from-primary to-primary-container text-white" : "bg-surface-container"
                }`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold">{milestone.title}</h4>
                  <p className="text-sm text-on-surface-variant">{milestone.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="glass-card p-6 rounded-3xl border-primary/10 bg-primary/5 flex items-center gap-4">
        <Info className="w-6 h-6 text-primary shrink-0" />
        <p className="text-sm font-medium text-on-surface-variant">
          <span className="font-bold text-primary">Pro Tip:</span> You drink 20% more water on weekdays compared to weekends. Try setting extra reminders for Saturday morning!
        </p>
      </div>
    </motion.div>
  );
}
