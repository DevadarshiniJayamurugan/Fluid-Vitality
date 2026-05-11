/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Dashboard } from './components/Dashboard';
import { History } from './components/History';
import { Settings } from './components/Settings';
import { Onboarding } from './components/Onboarding';
import { UserSettings, HydrationLog } from './types';
import { DEFAULT_SETTINGS } from './constants';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isOnboarded, setIsOnboarded] = useState(() => {
    return localStorage.getItem('onboarded') === 'true';
  });
  
  const [settings, setSettings] = useState<UserSettings>(() => {
    const saved = localStorage.getItem('userSettings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  const [logs, setLogs] = useState<HydrationLog[]>(() => {
    const saved = localStorage.getItem('hydrationLogs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
    localStorage.setItem('onboarded', isOnboarded.toString());
    localStorage.setItem('hydrationLogs', JSON.stringify(logs));
  }, [settings, isOnboarded, logs]);

  const handleLog = (amount: number) => {
    const newLog: HydrationLog = {
      id: Math.random().toString(36).substr(2, 9),
      amount,
      timestamp: Date.now(),
    };
    setLogs((prev) => [...prev, newLog]);
  };

  const currentIntake = logs.reduce((acc, log) => {
    const logDate = new Date(log.timestamp).toDateString();
    const today = new Date().toDateString();
    return logDate === today ? acc + log.amount : acc;
  }, 0);

  if (!isOnboarded) {
    return (
      <Onboarding 
        onComplete={(newSettings) => {
          setSettings(newSettings);
          setIsOnboarded(true);
        }} 
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <Dashboard 
              key="dashboard"
              currentIntake={currentIntake} 
              goal={settings.goal} 
              onLog={handleLog} 
            />
          )}
          {activeTab === 'history' && (
            <History key="history" />
          )}
          {activeTab === 'alerts' && (
            <div key="alerts" className="pt-32 px-6 text-center text-on-surface-variant font-medium">
              <h2 className="text-2xl font-bold mb-4">Alerts</h2>
              <p>Smart notifications are active.</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <Settings 
              key="settings"
              settings={settings} 
              onUpdate={(updated) => setSettings(prev => ({ ...prev, ...updated }))} 
            />
          )}
        </AnimatePresence>
      </main>

      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

