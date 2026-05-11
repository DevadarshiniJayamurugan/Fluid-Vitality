export type ActivityLevel = 'sedentary' | 'moderate' | 'active' | 'athlete';
export type Climate = 'cold' | 'moderate' | 'hot';

export interface UserSettings {
  weight: number;
  activityLevel: ActivityLevel;
  climate: Climate;
  goal: number; // in ml
  notificationsEnabled: boolean;
  wakeUpTime: string; // HH:mm
  sleepTime: string; // HH:mm
  frequency: number; // hours
}

export interface HydrationLog {
  id: string;
  amount: number; // ml
  timestamp: number;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  icon: string;
  achieved: boolean;
}
