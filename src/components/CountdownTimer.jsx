import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Create target date in Madrid timezone (2 PM on Nov 9, 2025)
      const targetDateMadrid = new Date('2025-11-09T14:00:00+01:00');
      const now = new Date();
      
      const difference = targetDateMadrid.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Днів', value: timeLeft.days },
    { label: 'Годин', value: timeLeft.hours },
    { label: 'Хвилин', value: timeLeft.minutes },
    { label: 'Секунд', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          className="text-center"
        >
              <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-slate-200/50 min-w-[70px] sm:min-w-[90px] lg:min-w-[120px] relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative z-10 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-thin text-slate-600 mb-1 sm:mb-2 tracking-wider"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
                <div className="relative z-10 text-xs sm:text-sm text-slate-600 font-light tracking-widest uppercase">
                  {unit.label}
                </div>
              </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
