
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
const AccommodationDropdown = ({ label, value, setValue, options }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative w-full">

            {/* Trigger */}
            <div
                className="cursor-pointer"
                onClick={() => setOpen(prev => !prev)}
            >
                <div className="text-[10px] text-gray-500">{label}</div>
                <div className="text-xs font-medium text-gray-700">
                    {value}
                </div>
            </div>

            {/* Dropdown */}
            {open && (
                <div className="absolute left-0 top-full mt-2 w-[180px] bg-white shadow-lg rounded-lg border z-[9999]">
                    {options.map((opt, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                setValue(opt);
                                setOpen(false);
                            }}
                            className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default AccommodationDropdown;