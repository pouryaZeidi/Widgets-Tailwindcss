import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

type Value = Date | Date[] | null;

const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const handleDateChange = (value: Value) => {
    if (Array.isArray(value)) {
      setDate(value[0] || null);
    } else if (value instanceof Date) {
      setDate(value);
    } else {
      setDate(null);
    }
  };

  return (
    <div className="p-4  ">
      <Calendar
        value={date}
        className=" border-spacing-6 rounded-lg shadow-md"
      />

      </div>
    
  );
};

export default CalendarComponent;
