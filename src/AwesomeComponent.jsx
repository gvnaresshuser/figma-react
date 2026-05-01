import { useState } from "react";
import { User, Calendar, Settings } from "lucide-react";
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
import Swal from "sweetalert2";
import DatePickerInput from "./components/DatePickerInput";
import GuestsDropdown from "./components/GuestsDropdown";
//https://www.figma.com/design/Ui9xmqM4aGfQbJHj6PR8I1/Travel-App--Community-?node-id=0-1&t=SkzrjiKiKjnbOqhs-1
const AwesomeComponent = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const [checkIn, setCheckIn] = useState(today);
    const [checkOut, setCheckOut] = useState(tomorrow);
    const [guests, setGuests] = useState(2);
    const [menuOpen, setMenuOpen] = useState(false);

    const formatDate = (date) => {
        if (!date) return "Not selected";
        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const getDays = (start, end) => {
        if (!start || !end) return 0;

        const diffTime = end.getTime() - start.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // ✅ ensure at least 1 day
        return diffDays === 0 ? 1 : diffDays;
    };

    const items = [
        { title: "Accommodation", value: "6730 Luna Land", icon: Settings },
        { title: "Check In", value: "12 Aug 2026", icon: Calendar },
        { title: "Check Out", value: "18 Aug 2026", icon: Calendar },
        { title: "Guests", value: "2 Adults", icon: ChevronDown },
    ];

    const cards = [
        {
            title: "Trip to Scotland",
            people: "31 people going",
            image: "/assets/unsplash_rC2_aH8lAlU.jpg",
        },
        {
            title: "Trip to Egypt",
            people: "27 people going",
            image: "/assets/unsplash_GNdp2Q4VZjw.jpg",
        },
        {
            title: "Trip to Greece",
            people: "20 people going",
            image: "/assets/unsplash_MdTtpxGlrz8.jpg",
        },
    ];
    const tags = ["MOUNTAINS", "PLAINS", "BEACHES"];

    const CURVE_PATH = `
   M28.0493 76.317C13.3127 43.5705 5.87619 12.7542 4 1.43937V0.441001
   C254.898 0.108211 760.173 -0.357694 774.091 0.441001
   C788.009 1.2397 791.829 12.4214 792 17.9124
   V879.005C791.488 893.98 779.208 900.47 765.904 898.972
   C545.878 899.971 106.235 900.869 107.873 898.473
   C109.51 896.077 110.261 863.53 110.431 847.557
   C104.803 788.154 104.803 790.65 70.5195 690.313
   C36.2364 589.977 37.2597 480.157 56.7039 420.754
   C72.2592 373.232 83.9939 315.426 87.9169 292.464
   C96.1039 197.619 46.4701 117.25 28.0493 76.317Z
  `;
    const handleMenuClick = (label) => {
        Swal.fire({
            title: "You clicked",
            text: label,
            icon: "success",
            confirmButtonColor: "#E7AC72",

            background: "linear-gradient(to right, #e4a97b, #4CAF50, #1E88E5)",
            color: "#ffffff",
        });
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 mt-4">

            {/* <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[10px] overflow-hidden"> */}
            <div className="
  relative w-full 
  min-h-[800px] sm:min-h-[800px] md:h-[500px] lg:h-[600px]
  rounded-t-[10px] overflow-hidden
">
                {/* LOGO (Top-left fixed) */}
                <div className="absolute top-[10px] left-[10px] z-30">
                    <img
                        src="/assets/image-3.png"
                        alt="icon"
                        className="w-10 h-10"
                    />
                </div>
                {/* NAVBAR */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-[1100px] px-4 z-20 flex justify-end items-center">


                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-6 text-white">
                        <div onClick={() => handleMenuClick("Home")}>Home</div>
                        <div onClick={() => handleMenuClick("About Us")}>About Us</div>
                        <div onClick={() => handleMenuClick("Premium")}>Premium</div>
                        <div onClick={() => handleMenuClick("Blogs")}>Blogs</div>
                        <div onClick={() => handleMenuClick("Explore")} className="px-4 py-1 border border-white rounded-xl">
                            Explore
                        </div>
                    </div>

                    {/* HAMBURGER (Mobile only) */}
                    <div
                        className="md:hidden flex flex-col gap-1 cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="w-6 h-[2px] bg-white"></span>
                        <span className="w-6 h-[2px] bg-white"></span>
                        <span className="w-6 h-[2px] bg-white"></span>
                    </div>
                </div>

                {/* MOBILE MENU - bg-black/70 backdrop-blur-md */}
                {menuOpen && (
                    <div className="absolute top-0 left-0 w-full h-full 
                    bg-gradient-to-r from-[#e4a97b] via-[#4CAF50] to-[#1E88E5]  
                    z-40 flex flex-col items-center justify-center gap-6 text-white text-lg">

                        {/* CLOSE BUTTON */}
                        <div
                            className="absolute top-4 right-4 text-2xl cursor-pointer"
                            onClick={() => setMenuOpen(false)}
                        >
                            ✕
                        </div>

                        <div
                            onClick={() => {
                                handleMenuClick("Home");
                                setMenuOpen(false);
                            }}
                            className="cursor-pointer"
                        >
                            Home
                        </div>

                        <div
                            onClick={() => {
                                handleMenuClick("About Us");
                                setMenuOpen(false);
                            }}
                            className="cursor-pointer"
                        >
                            About Us
                        </div>

                        <div
                            onClick={() => {
                                handleMenuClick("Premium");
                                setMenuOpen(false);
                            }}
                            className="cursor-pointer"
                        >
                            Premium
                        </div>

                        <div
                            onClick={() => {
                                handleMenuClick("Blogs");
                                setMenuOpen(false);
                            }}
                            className="cursor-pointer"
                        >
                            Blogs
                        </div>

                        <div
                            onClick={() => {
                                handleMenuClick("Explore");
                                setMenuOpen(false);
                            }}
                            className="px-6 py-2 border border-white rounded-xl cursor-pointer"
                        >
                            Explore
                        </div>
                    </div>
                )}

                <div className="absolute top-[20%] left-0 w-full px-4 sm:px-6 md:px-10 z-30">

                    <div className="max-w-[600px]">

                        {/* Tags */}
                        <div className="flex items-center gap-2 text-white text-[10px] md:text-xs mb-3">
                            {tags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-2">

                                    <span>{tag}</span>

                                    {/* Divider (except last) */}
                                    {index !== tags.length - 1 && (
                                        <span className="w-[2px] h-[10px] bg-white"></span>
                                    )}

                                </div>
                            ))}
                        </div>

                        {/* Heading */}
                        <h1 className="text-white font-bold 
            text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] 
            leading-tight md:leading-snug">
                            Spend your vacation with our activities
                        </h1>

                        {/* ✅ CONTINUATION STARTS HERE */}

                        {/* TITLE */}
                        <div className="mt-6 text-white font-semibold text-sm md:text-base">
                            MOST POPULAR
                        </div>

                        {/* CARDS */}
                        <div className="mt-3">
                            <div className="
                                flex gap-3 
                                overflow-x-auto md:overflow-visible
                                scroll-smooth
                                scrollbar-hide
                                pb-2
                            ">

                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="                                        
                                    min-w-[130px] 
                                    sm:min-w-[140px] 
                                    md:min-w-0 md:w-[180px] lg:w-[140px]
                                    bg-white rounded-lg p-2 shadow-md flex-shrink-0
                                    "
                                    >
                                        <img
                                            src={card.image}
                                            className="w-full h-[90px] md:h-[110px] object-cover rounded-md"
                                        />
                                        <div className="mt-1 text-xs md:text-sm font-semibold text-[#023f76]">
                                            {card.title}
                                        </div>
                                        <div className="text-[10px] md:text-xs text-gray-500">
                                            {card.people}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>

                    {/* ------------------------------------------------------------------------------------- */}
                    <div className="mt-6 px-4 md:px-10">
                        <div className="w-full max-w-[1100px] mx-auto 
                    bg-white/60 backdrop-blur-md p-3 md:p-5 rounded-xl">

                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0">

                                {/* INPUT SECTION */}
                                <div className="flex flex-col md:flex-row flex-1 bg-white 
                                rounded-xl overflow-visible">

                                    {items.map((item, index) => {
                                        const Icon = item.icon;
                                        const isCalendar = Icon === Calendar;
                                        const isGuests = Icon === ChevronDown;

                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 px-4 py-2 md:py-3 flex-1 relative"
                                            >
                                                {isCalendar ? (
                                                    <DatePickerInput
                                                        label={item.title}
                                                        value={item.title === "Check In" ? checkIn : checkOut}
                                                        onChange={(date) => {
                                                            if (item.title === "Check In") {
                                                                setCheckIn(date);

                                                                // auto fix checkout if needed
                                                                if (checkOut < date) {
                                                                    setCheckOut(date);
                                                                }
                                                            } else {
                                                                setCheckOut(date);
                                                            }
                                                        }}
                                                        minDate={
                                                            item.title === "Check Out"
                                                                ? checkIn        // ✅ restrict checkout
                                                                : new Date()     // ✅ restrict past dates
                                                        }
                                                    />
                                                ) : isGuests ? (
                                                    <GuestsDropdown
                                                        label={item.title}
                                                        guests={guests}
                                                        setGuests={setGuests}
                                                    />
                                                ) : (
                                                    <>
                                                        <Icon size={18} className="text-gray-400" />

                                                        <div>
                                                            <div className="text-[10px] text-gray-500">
                                                                {item.title}
                                                            </div>
                                                            <div className="text-xs font-medium text-gray-700">
                                                                {item.value}
                                                            </div>
                                                        </div>
                                                    </>
                                                )}

                                                {/* Divider */}
                                                {index !== items.length - 1 && (
                                                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-gray-200 pointer-events-none" />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* BUTTON */}
                                <button
                                    onClick={() => {
                                        if (checkIn > checkOut) {
                                            Swal.fire({
                                                title: "Invalid Dates ❌",
                                                text: "Check-out date cannot be earlier than check-in date.",
                                                icon: "error",
                                                confirmButtonColor: "#E7AC72",
                                            });
                                            return;
                                        }

                                        const days = getDays(checkIn, checkOut);

                                        Swal.fire({
                                            title: "Your Selection ✨",
                                            background: "linear-gradient(to right, #e4a97b, #4CAF50, #1E88E5)",
                                            color: "#ffffff",
                                            html: `
                                            <div style="text-align:left">
                                                <p><b>Check In:</b> ${formatDate(checkIn)}</p>
                                                <p><b>Check Out:</b> ${formatDate(checkOut)}</p>
                                                <p><b>Guests:</b> ${guests}</p>
                                                <p><b>Duration:</b> ${days} Day${days !== 1 ? "s" : ""}</p>
                                            </div>
                                        `,
                                            icon: "info",
                                            confirmButtonColor: "#E7AC72",
                                        });
                                    }}
                                    className="ml-2 w-full md:w-[140px] h-[45px] 
                                bg-[#E7AC72] text-white rounded-xl text-sm font-semibold 
                                hover:bg-[#d9985e] transition flex items-center justify-center"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------- */}

                </div>


                {/* SVG MASK */}
                <svg width="0" height="0">
                    <defs>
                        {/*  <mask id="leftMask">
                            <rect width="1440" height="600" fill="white" />
                            <g transform="translate(600,0) scale(1.1)">
                                <path d={CURVE_PATH} fill="black" />
                            </g>
                        </mask>

                        <mask id="rightMask">
                            <rect width="1440" height="600" fill="black" />
                            <g transform="translate(600,0) scale(1.1)">
                                <path d={CURVE_PATH} fill="white" />
                            </g>
                        </mask> */}
                        <mask id="leftMask">
                            <rect width="1440" height="800" fill="white" />
                            <g transform="translate(600,0) scale(1.1)">
                                <path d={CURVE_PATH} fill="black" />
                            </g>
                        </mask>

                        <mask id="rightMask">
                            <rect width="1440" height="600" fill="black" />
                            <g transform="translate(600,0) scale(1.1)">
                                <path d={CURVE_PATH} fill="white" />
                            </g>
                        </mask>

                    </defs>
                </svg>

                {/* LEFT IMAGE */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/image-2.png')",
                        WebkitMask: "url(#leftMask)",
                        mask: "url(#leftMask)"
                    }}
                />

                {/* RIGHT IMAGE */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/aerial-view-blue-sea-boat-1.png')",
                        WebkitMask: "url(#rightMask)",
                        mask: "url(#rightMask)"
                    }}
                />
            </div>


            {/* FOOTER */}
            <footer className="w-full bg-gradient-to-r from-[#e4a97b] via-[#4CAF50] to-[#1E88E5] 
                               text-white py-3 px-4">
                <div className="max-w-[1100px] mx-auto flex justify-center items-center text-xs md:text-sm gap-2">
                    <span>© 2026</span>
                    <span className="font-medium">www.nickelfox.com</span>
                </div>
            </footer>


        </div>
    );
};

export default AwesomeComponent;