import { useEffect, useRef, useState } from "react";
import propTypes from "prop-types"
import cx from "classnames";

import { formatDate } from "../lib/Utils";
import { CalendarIcon } from '@radix-ui/react-icons';
import { DatePicker } from "./DatePicker";

const DatePickerInput = ({ error, value, className, onChange }) => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(value ?? new Date());

    const selectedDatePickerRef = useRef();

    function handleChangeDate(date) {
        setSelectedDate(date)
        onChange?.(date)
      }
    
    useEffect(() => {
        let handler = (e) => {
            if(!selectedDatePickerRef.current.contains(e.target)){
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);
    
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    }, []);

    return ( 
        <div ref={selectedDatePickerRef} className="relative w-full">
            <button 
                type="button"
                className={cx("bg-white dark:bg-transparent w-full rounded-lg border border-gray-300 dark:border-white/[8%] px-3 h-[56px] text-gray-600 focus:border-primary-500 dark:focus:border-primary-700 transition-all outline-none text-left relative pt-4", 
                    error && "!border-red-600", open && "border-primary-500", className
                )}
                onClick={() => setOpen(!open)}
            
            >
                <span className="text-gray-600 text-xs left-[13px] top-2 pointer-events-none absolute">
                    Data
                </span>
                <span className="text-gray-900 dark:text-gray-50 text-base">{formatDate(selectedDate)}</span>
                <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-600" />
            </button>            
            {open && (
                <div
                    className="bg-white dark:bg-primary-950 border border-gray-300 dark:border-white/[5%] p-4  drop-shadow-xl absolute z-20 right-0 top-[-316px] rounded-xl"               
                >
                    <DatePicker
                        value={selectedDate}
                        onChange={(date) => handleChangeDate(date)}
                    />
                </div>
            )}

            {error && (
                <small className="text-red-600 mt-2 block">{error}</small>
            )}
        </div>
     );
}
 
export default DatePickerInput;

DatePickerInput.propTypes = {
    className: propTypes.string,
    value: propTypes.instanceOf(Date),
    onChange: propTypes.func,
    error: propTypes.string
}