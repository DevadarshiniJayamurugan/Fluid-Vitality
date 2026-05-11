<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/f6815515-ec1c-4267-b4fa-587bbd81b782

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


# 💧 Fluid Vitality

**Fluid Vitality** is a premium hydration tracker crafted with a serene, high-fidelity **Glassmorphic** aesthetic.  
The application emphasizes clarity, mental wellness, and effortless habit tracking through smooth interactions and elegant visual design.

---

## ✨ Features

### 🧮 Fluid Goal Calculator
A personalized onboarding experience that calculates your ideal daily hydration target based on:

- Weight
- Activity level *(Sedentary → Athlete)*
- Local climate *(Cold → Hot)*

---

### 📊 Dynamic Dashboard
A beautifully animated central hub featuring:

- Smooth progress ring animations
- Quick hydration logging shortcuts:
  - 250ml
  - 500ml
  - 750ml
- Custom water intake logger

---

### 📈 Deep Insights & History

#### 🔥 Weekly Heatmap
Track your hydration consistency over the past 7 days at a glance.

#### 📅 Monthly Overview
Interactive bar charts powered by **Recharts** to visualize weekly progress and hydration trends.

#### 🏆 Milestones & Achievements
Stay motivated with achievement tracking, including:

- Hydration Hero
- 3-Day Streak
- Consistency milestones
- Daily completion rewards

---

### 🔔 Smart Reminders & Settings
Customize your hydration journey with:

- Quiet hours
- Reminder frequency
- Biometric settings
- Personalized recommendations

---

## 🎨 Serene Design System

Fluid Vitality is built around a calming and modern UI philosophy:

- Custom **Glassmorphism** effects
  - Backdrop blurs
  - Translucent layered surfaces
- **Manrope** geometric typography
- Haptic-inspired micro-interactions
- Smooth transitions powered by motion
- Fully responsive across mobile and desktop

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| React 18 + TypeScript | Frontend Framework |
| Tailwind CSS v4 | Styling & Theme System |
| Framer Motion (`motion/react`) | Fluid animations & transitions |
| Recharts | Data visualization |
| localStorage | Persistence for settings & hydration logs |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/fluid-vitality.git
cd fluid-vitality
