import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = ({ label }) => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="flex items-center gap-3 flex-1 relative">

            {/* Icon */}
            <span className="text-xl opacity-60">📅</span>


            {/*   <DatePicker
                    selected={date}
                    onChange={(d) => setDate(d)}
                    dateFormat="dd MMM yyyy"
                    className="
            font-semibold text-gray-700
            bg-transparent outline-none cursor-pointer
          "
                    popperClassName="z-50"
                /> */}
                
            {/* Text + Picker */}
            <div className="flex flex-col w-full">
                <label className="text-xs text-gray-500">{label}</label>

                <DatePicker
                    selected={date}
                    onChange={(d) => setDate(d)}
                    dateFormat="dd MMM yyyy"
                    withPortal
                />
            </div>

        </div>
    );
};

export default DatePickerInput;