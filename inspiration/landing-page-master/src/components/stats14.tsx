'use client';

import NumberFlow from '@number-flow/react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
const MotionNumberFlow = motion.create(NumberFlow);

const Stats14 = () => {
  return (
    <AnimatedNumberCountdown
      endDate={new Date('2026-02-15')}
      className="my-4"
    />
  );
};

export { Stats14 };

interface CountdownProps {
  endDate: Date;
  startDate?: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function AnimatedNumberCountdown({
  endDate,
  startDate,
  className,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const start = startDate ? new Date(startDate) : new Date();
      const end = new Date(endDate);
      const difference = end.getTime() - start.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate, startDate]);

  return (
    <div
      className={`flex items-center justify-center gap-4 lg:justify-start ${className} text-secondary`}
    >
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.days}
          className="text-xl font-semibold tracking-tight sm:text-3xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-primary text-xs">zile</span>
      </div>
      <div className="mb-4 text-lg font-bold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.hours}
          className="text-xl font-semibold tracking-tight sm:text-3xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-primary text-xs">ore</span>
      </div>
      <div className="mb-4 text-lg font-bold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.minutes}
          className="text-xl font-semibold tracking-tight sm:text-3xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-primary text-xs">minute</span>
      </div>
      <div className="mb-4 text-lg font-bold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeLeft.seconds}
          className="text-xl font-semibold tracking-tight sm:text-3xl"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-primary text-xs">secunde</span>
      </div>
    </div>
  );
}
