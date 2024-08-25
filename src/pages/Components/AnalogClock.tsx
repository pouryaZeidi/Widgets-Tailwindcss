import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; 

interface AnalogClockProps {
  defaultSize?: string;
  defaultTheme?: string;
}

const AnalogClock: React.FC<AnalogClockProps> = ({
  defaultSize = 'medium',
  defaultTheme = 'dark',
}) => {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hoursDeg = (hours % 12) * 30 + minutes * 0.5;
      const minutesDeg = (minutes / 60) * 360;
      const secondsDeg = (seconds / 60) * 360;

      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${hoursDeg}deg)`;
      }
      if (minuteRef.current) {
        minuteRef.current.style.transform = `rotate(${minutesDeg}deg)`;
      }
      if (secondRef.current) {
        secondRef.current.style.transform = `rotate(${secondsDeg}deg)`;
      }
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`flex items-center justify-center ${defaultTheme}`}>
      <div className={`relative ${defaultSize} w-72 h-72 border-transparent  rounded-full`}>
        <Image
          src="/clock-without-hands.jpg" 
          alt="Clock without hands"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
        
        <div
          ref={hourRef}
          className="absolute bg-black"
          style={{
            height: '4em', 
            width: '0.4em',
            bottom: '50%',
            left: '50%',
            transformOrigin: 'bottom center',
            transform: 'translateX(-50%)',
            borderRadius: '0 0 0.3em 0.3em',
            zIndex: 10, 
          }}
        />
        <div
          ref={minuteRef}
          className="absolute bg-black"
          style={{
            height: '6.2em', 
            width: '0.4em',
            bottom: '50%',
            left: '50%',
            transformOrigin: 'bottom center',
            transform: 'translateX(-50%)',
            borderRadius: '0 0 0.2em 0.2em',
            zIndex: 10, 
          }}
        />
        <div
          ref={secondRef}
          className="absolute bg-red-500"
          style={{
            height: '7em', 
            width: '0.2em',
            bottom: '50%',
            left: '50%',
            transformOrigin: 'bottom center',
            transform: 'translateX(-50%)',
            borderRadius: '0 0 0.15em 0.15em',
            zIndex: 10, 
          }}
        />
        <div className="absolute bg-gray-600 rounded-full" style={{
          height: '1em',
          width: '1em',
          bottom: '50%',
          left: '50%',
          transform: 'translate(-50%, 50%)',
          zIndex: 10, 
        }} />
      </div>
    </div>
  );
};

export default AnalogClock;
