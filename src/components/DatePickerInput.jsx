import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//const DatePickerInput = ({ label, value, onChange }) => {
const DatePickerInput = ({ label, value, onChange, minDate }) => {

    const [date, setDate] = useState(new Date());

    return (
        <div className="flex items-center gap-3 flex-1 relative z-50">

            {/* Icon */}
            <span className="text-gray-400 text-lg">📅</span>

            <div className="flex flex-col w-full">
                <label className="text-[10px] text-gray-500">
                    {label}
                </label>

                <DatePicker
                    selected={value}
                    onChange={(d) => onChange(d)}
                    dateFormat="dd MMM yyyy"
                    popperPlacement="bottom-center"
                    portalId="root" // 🔥 helps escape overflow issues          
                    minDate={minDate}
                    withPortal
                    className="text-xs font-medium text-gray-700 bg-transparent outline-none cursor-pointer"
                />
            </div>
        </div>
    );
};
export default DatePickerInput;