import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // If using Next.js
import batteryIcon from '/public/battery-icon.svg'; // Adjust path as needed

const BatteryComponent: React.FC = () => {
  const [batteryLevel, setBatteryLevel] = useState<number>(100);

  useEffect(() => {
    const updateBatteryLevel = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      let level: number;

      if (hours >= 0 && hours < 6) {
        // Charging from 12:01 AM to 6:00 AM
        const timePassedSinceMidnight = hours * 60 + minutes;
        level = (timePassedSinceMidnight / 360) * 100; // 360 minutes from 12:01 AM to 6:00 AM
      } else if (hours >= 6 && hours < 24) {
        // Discharging from 6:01 AM to 12:00 AM
        const timePassedSinceSixAM = (hours - 6) * 60 + minutes;
        level = 100 - (timePassedSinceSixAM / 1080) * 100; // 1080 minutes from 6:01 AM to 12:00 AM
      } else {
        level = 100; // Just a fallback, should rarely be triggered
      }

      setBatteryLevel(Math.max(0, Math.min(100, level)));
    };

    updateBatteryLevel();
    const interval = setInterval(updateBatteryLevel, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center  ">
      <div className="relative w-[80px] h-[80px]">
        <div className='text-nowrap mb-5'>Your day Charge </div>
        <Image className='mt-2'
          src={batteryIcon}
          alt="Battery Icon"
          layout="fill"
          objectFit="contain"
          style={{
            filter: `grayscale(${100 - batteryLevel}%)`,
          }}
        />
   
      </div>
      <p className="text-xl mt-3 ml-4">{Math.round(batteryLevel)}%</p>
    </div>
  );
};

export default BatteryComponent;
