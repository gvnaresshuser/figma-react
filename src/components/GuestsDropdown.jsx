import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const GuestsDropdown = ({ label, guests, setGuests }) => {
    const [open, setOpen] = useState(false);
    //const [guests, setGuests] = useState(2);
    const [openUp, setOpenUp] = useState(false);

    const ref = useRef();

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Toggle + decide direction (up/down)
    const handleToggle = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;

            // approx dropdown height
            setOpenUp(spaceBelow < 180);
        }
        setOpen((prev) => !prev);
    };

    const options = [1, 2, 3, 4];

    return (
        <div ref={ref} className="flex items-center gap-3 w-full relative">

            {/* Trigger */}
            <div
                className="flex items-center gap-3 w-full cursor-pointer"
                onClick={handleToggle}
            >
                <ChevronDown
                    size={18}
                    className={`text-gray-400 transition ${open ? "rotate-180" : ""}`}
                />

                <div className="flex flex-col w-full">
                    <div className="text-[10px] text-gray-500">{label}</div>
                    <div className="text-xs font-medium text-gray-700">
                        {guests} Guest{guests > 1 && "s"}
                    </div>
                </div>
            </div>

            {/* Dropdown */}
            {open && (
                <div
                    className={`absolute left-0 w-[140px] bg-white shadow-lg rounded-lg border z-[9999]
                    ${openUp ? "bottom-full mb-2" : "top-full mt-2"}`}
                >
                    {options.map((num) => (
                        <div
                            key={num}
                            onClick={() => {
                                setGuests(num);
                                setOpen(false);
                            }}
                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 
                            ${guests === num ? "bg-gray-100 font-semibold" : ""}`}
                        >
                            {num} Guest{num > 1 && "s"}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GuestsDropdown;