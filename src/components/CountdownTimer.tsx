import React, { useEffect, useState } from 'react';
import { CountdownTimer as TimerType } from '../types';

interface Props {
  launchDate: string;
}

const CountdownTimer: React.FC<Props> = ({ launchDate }) => {
  const [countdown, setCountdown] = useState<TimerType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(launchDate) - +new Date();
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(countdown).map(([unit, value]) => (
        <div key={unit} className="bg-gray-800 rounded-lg p-4">
          <div className="text-3xl font-bold text-blue-400">{value}</div>
          <div className="text-gray-400 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
}

export default CountdownTimer