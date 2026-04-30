import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = ({ label }) => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="flex items-center gap-3 flex-1 relative z-50">

            {/* Icon */}
            <span className="text-xl opacity-60">📅</span>

            <div className="flex flex-col w-full ">
                <label className="text-xs text-gray-500">{label}</label>

                <DatePicker 
                    selected={date}
                    onChange={(d) => setDate(d)}
                    dateFormat="dd MMM yyyy"
                    popperClassName="z-[9999]"
                    popperPlacement="top-start"
                    className="
                    font-semibold text-gray-700
                    bg-transparent outline-none cursor-pointer
                    overflow-visible      
                "
                />
               
               {/*  <DatePicker
                    selected={date}
                    onChange={(d) => setDate(d)}
                    dateFormat="dd MMM yyyy"
                    popperPlacement="top-start"
                    popperClassName="z-[999999]"
                /> */}
            </div>

        </div>
    );
};

export default DatePickerInput;