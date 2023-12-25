import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { capitalizeFirstLetter } from '../lib/Utils';

import propTypes from "prop-types";


export function DatePicker({ value, onChange }) {
  return (
    <DayPicker
      locale={ptBR}
      selected={value}
      mode="single"
      onSelect={(date) => onChange(date ?? new Date())}
      classNames={{
        caption: 'flex items-center justify-between',
        nav: 'flex gap-1',
        nav_button_previous:
          'text-primary-500 flex items-center justify-center !bg-transparent',
        nav_button_next:
          'text-primary-500 flex items-center justify-center !bg-transparent',
        head_cell: 'uppercase text-xs text-gray-500 font-medium pt-1 pb-2',
        button:
          'text-gray-700 dark:text-gray-600 cursor-pointer w-10 h-10 hover:bg-gray-100 dark:hover:bg-white/[3%] rounded-full',
        day_today: 'bg-gray-100 dark:bg-white/[3%] font-bold text-gray-900 dark:text-gray-50',
        day_selected: '!bg-primary-500 !text-white font-medium',
      }}
      formatters={{
        formatCaption: (date, options) => {
          return (
            <span className="text-gray-900 dark:text-gray-50 tracking-[-0.408px] font-medium">
              {capitalizeFirstLetter(format(date, 'LLLL yyyy', options))}
            </span>
          );
        },
      }}
    ></DayPicker>
  );
}

DatePicker.propTypes = {
    value: propTypes.instanceOf(Date),
    onChange: propTypes.func
}
