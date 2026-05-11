import { ActivityLevel, Climate, UserSettings } from './types';

export const calculateGoal = (weight: number, activity: ActivityLevel, climate: Climate): number => {
  // Base: 35ml per kg
  let base = weight * 35;
  
  // Activity multiplier
  const activityMultipliers: Record<ActivityLevel, number> = {
    sedentary: 1,
    moderate: 1.15,
    active: 1.3,
    athlete: 1.5
  };
  
  // Climate adjustment (ml)
  const climateAdjustments: Record<Climate, number> = {
    cold: 0,
    moderate: 200,
    hot: 500
  };
  
  return Math.round(base * activityMultipliers[activity] + climateAdjustments[climate]);
};

export const DEFAULT_SETTINGS: UserSettings = {
  weight: 70,
  activityLevel: 'moderate',
  climate: 'moderate',
  goal: 2450,
  notificationsEnabled: true,
  wakeUpTime: '07:00',
  sleepTime: '22:30',
  frequency: 1.5
};
