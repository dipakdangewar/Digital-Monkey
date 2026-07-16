import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

export default function SeatsCounter() {
  const [seats, setSeats] = useState<number>(4);
  const [lastUpdateType, setLastUpdateType] = useState<'none' | 'booked' | 'opened'>('none');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Names and cities in India for realistic simulated social proof bookings
  const cities = ['Pune', 'Mumbai', 'Bangalore', 'Delhi', 'Hyderabad', 'Chennai', 'Kolkata'];
  const names = ['Aarav', 'Ananya', 'Rohan', 'Sneha', 'Aditya', 'Priya', 'Vikram', 'Neha', 'Kabir', 'Riya'];

  useEffect(() => {
    // Start with a random number of seats between 3 and 5
    const initialSeats = Math.floor(Math.random() * 3) + 3; // 3, 4, or 5
    setSeats(initialSeats);

    // Dynamic interval to change seat counts randomly to simulate occupancy/bookings
    const interval = setInterval(() => {
      setSeats((currentSeats) => {
        const shouldChange = Math.random() > 0.3; // 70% chance to simulate an event
        if (!shouldChange) return currentSeats;

        let nextSeats = currentSeats;
        let eventType: 'booked' | 'opened' = 'booked';
        let message = '';

        if (currentSeats > 2 && Math.random() > 0.2) {
          // 80% chance to decrement (simulate a booking)
          nextSeats = currentSeats - 1;
          eventType = 'booked';
          
          const randomName = names[Math.floor(Math.random() * names.length)];
          const randomCity = cities[Math.floor(Math.random() * cities.length)];
          message = `⚡ ${randomName} from ${randomCity} just booked a demo slot!`;
        } else if (currentSeats <= 2) {
          // If 2 or fewer seats are left, simulate a seat release or new batch addition to avoid hitting 0
          nextSeats = Math.floor(Math.random() * 3) + 4; // Reset to 4-6
          eventType = 'opened';
          message = `🎉 Additional slots opened for the upcoming morning batch!`;
        } else {
          // Occasional random increase (e.g. timeout / slot cancelation)
          nextSeats = Math.min(6, currentSeats + 1);
          eventType = 'opened';
          message = `🔄 A demo slot has been released. 1 extra seat is available.`;
        }

        if (nextSeats !== currentSeats) {
          setLastUpdateType(eventType);
          setToastMessage(message);
          setShowToast(true);
          
          // Hide toast after 5 seconds
          setTimeout(() => {
            setShowToast(false);
          }, 5000);

          // Clear animation state after brief flash
          setTimeout(() => {
            setLastUpdateType('none');
          }, 1500);
        }

        return nextSeats;
      });
    }, 18000); // Check/update every 18 seconds to keep it engaging but not too frantic

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center">
      {/* Dynamic Seats Remaining Badge */}
      <div 
        className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 border select-none transition-all duration-500 bg-red-50/90 dark:bg-red-950/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900/30 shadow-sm`}
        title="Due to high demand, cohort size is strictly capped at 25 participants"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        
        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-extrabold tracking-wide uppercase font-mono">
          <span className="hidden sm:inline">Only</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={seats}
              initial={{ y: -8, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 8, opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className={`inline-block font-black text-xs ${
                lastUpdateType === 'booked' 
                  ? 'text-red-700 dark:text-red-300 scale-110' 
                  : lastUpdateType === 'opened' 
                  ? 'text-emerald-600 dark:text-emerald-400 scale-110' 
                  : ''
              }`}
            >
              {seats}
            </motion.span>
          </AnimatePresence>
          <span>{seats === 1 ? 'seat' : 'seats'}<span className="hidden sm:inline"> left</span></span>
        </div>
      </div>

      {/* Floating Mini Notification Toast for Social Proof */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="fixed top-18 right-4 md:right-1/4 lg:right-auto lg:absolute lg:top-12 lg:left-1/2 lg:-translate-x-1/2 z-50 w-72 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md text-white p-3 rounded-xl border border-slate-800 shadow-2xl flex items-start gap-2.5 pointer-events-none"
          >
            <div className="p-1.5 rounded-lg bg-red-500/10 text-red-400 shrink-0 mt-0.5">
              <LucideIcon name="Sparkles" size={12} className="animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-slate-100 leading-snug">
                {toastMessage}
              </p>
              <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                Real-time cohort update
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
