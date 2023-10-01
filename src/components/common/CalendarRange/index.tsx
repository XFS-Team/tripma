import { useEffect, useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './calendarRange.scss';

interface IDateProps {
  children: React.ReactNode;
  className?: string;
}

interface IConfigDate {
  direction: 'horizontal' | 'vertical';
  showMonthArrow: boolean;
}

const CalendarRange = ({ children, className }: IDateProps) => {
  const [configDate, setConfigDate] = useState<IConfigDate>({
    direction: 'horizontal',
    showMonthArrow: true,
  });

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setConfigDate({ direction: 'vertical', showMonthArrow: false });
    }
  }, []);
  
  return (
    <div
      className={`max-w-[642px] shadow-calender border border-solid border-grey-200 flex flex-col mx-auto rounded-xl overflow-hidden ${className}`}
    >
      {children}
      <Calendar
        className="py-8 md:px-[65px]"
        direction={configDate.direction}
        months={2}
        showMonthAndYearPickers={false}
        showDateDisplay={false}
        showPreview={false}
        showMonthArrow={configDate.showMonthArrow}
      ></Calendar>
    </div>
  );
};

export default CalendarRange;
