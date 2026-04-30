import { User, Calendar, Settings } from "lucide-react";
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from "lucide-react";
const TestComp = () => {
    // 🔥 Softer curve (tuned version)
    const CURVE_PATH = `
   M28.0493 76.317C13.3127 43.5705 5.87619 12.7542 4 1.43937V0.441001C254.898 0.108211 760.173 -0.357694 774.091 0.441001C788.009 1.2397 791.829 12.4214 792 17.9124V879.005C791.488 893.98 779.208 900.47 765.904 898.972C545.878 899.971 106.235 900.869 107.873 898.473C109.51 896.077 110.261 863.53 110.431 847.557C104.803 788.154 104.803 790.65 70.5195 690.313C36.2364 589.977 37.2597 480.157 56.7039 420.754C72.2592 373.232 83.9939 315.426 87.9169 292.464C96.1039 197.619 46.4701 117.25 28.0493 76.317Z
  `;

    const items = [
        { title: "Accommodation", value: "6730 Luna Land", icon: Settings },
        { title: "Check In", value: "12 Aug 2026", icon: Calendar },
        { title: "Check Out", value: "18 Aug 2026", icon: Calendar },
        { title: "Guests", value: "2 Adults", icon: User },
        { title: "Guests", value: "2 Adults", icon: ChevronDown },
        //{ title: "Button", value: "Search", icon: ChevronDown },
    ];

    return (
        <>
            <div className="relative left-14 w-[1440px] h-[600px] rounded-[10px] 
        overflow-hidden">

                {/* MAIN SVG */}
                <svg
                    viewBox="0 0 1440 600"
                    className="absolute inset-0 w-full h-full rounded-[10px] "
                >
                    <defs>
                        {/* RIGHT MASK */}
                        <mask id="rightMask">
                            <rect width="1440" height="600" fill="black" />
                            <g transform="translate(600,0)">
                                <path d={CURVE_PATH} fill="white" />
                            </g>
                        </mask>

                        {/* LEFT MASK */}
                        <mask id="leftMask">
                            <rect width="1440" height="600" fill="white" />
                            <g transform="translate(600,0)">
                                <path d={CURVE_PATH} fill="black" />
                            </g>
                        </mask>
                    </defs>

                    {/* LEFT IMAGE */}
                    <image
                        href="/assets/image-2.png"
                        width="940"
                        height="600"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#leftMask)"
                    />

                    {/* RIGHT IMAGE */}
                    <image
                        href="/assets/aerial-view-blue-sea-boat-1.png"
                        width="1440"
                        height="600"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#rightMask)"
                    />
                </svg>






                {/* CURVE OVERLAY (matches exactly) */}
                <svg
                    viewBox="0 0 1440 600"
                    className="absolute inset-0 w-full h-full pointer-events-none z-50"
                >
                    <g transform="translate(600,0)">
                        <path
                            d={CURVE_PATH}
                            fill="none"
                            stroke="#C4C4C4"
                            strokeWidth="2"
                            style={{ filter: "drop-shadow(0 0 8px rgba(0,0,0,0.4))" }}
                        />
                    </g>
                </svg>

                <div className="flex p-0 gap-6 absolute 
            w-[675px] h-[58px] left-[53%] top-[4%]">
                    <div className="w-[65px] h-[23px] text-[14px] h-[23px] text-[#ffffff]">
                        Home
                    </div>
                    <div className="w-[65px] h-[23px] text-[14px] h-[23px] text-[#ffffff]">
                        About Us
                    </div>
                    <div className="w-[65px] h-[23px] text-[14px] h-[23px] text-[#ffffff]">
                        Premium
                    </div>
                    <div className="w-[65px] h-[23px] text-[14px] h-[23px] text-[#ffffff]">
                        Blogs
                    </div>
                    <div className="
                w-[90px] 
                h-[32px] 
                flex items-center justify-center
                text-[14px]
                border border-2
                text-white
                rounded-xl
                ">
                        Explore
                    </div>
                </div>

                {/* ICON */}
                <div className="absolute w-[60px] h-[60px] left-[2%] top-[4%]">
                    <img
                        src="/assets/image-3.png"
                        alt="icon"
                        className="w-10 h-10"
                    />
                </div>

                <div className="flex flex-col p-0 gap-12.5 absolute w-[611px] h-[480px] 
            left-[2%] top-[20%]">
                    <div className="w-[506px] h-[154px]">
                        <div className="flex items-center gap-2 text-white text-[10px]">
                            <span>MOUNTAINS</span>
                            <span className="w-[2px] h-[10px] bg-white"></span>
                            <span>PLAINS</span>
                            <span className="w-[2px] h-[10px] bg-white"></span>
                            <span>BEACHES</span>
                        </div>

                        <div className="absolute w-[300px] h-[114px] left-0 top-[5%] text-[27px] text-[#ffffff]
                    font-['Montserrat'] font-bold leading-[37px]">
                            Spend your vacation with our activites
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 w-[611px] mt-[-85px]">

                        {/* TITLE */}
                        <div className="text-white font-bold text-[15px] tracking-wide">
                            MOST POPULAR
                        </div>

                        {/* CARDS ROW */}
                        <div className="flex gap-3 mt-[-17px]">

                            {/* CARD */}
                            <div className="w-[108px] rounded-[5px] bg-white p-1 shadow-md">
                                <img
                                    src="/assets/unsplash_rC2_aH8lAlU.jpg"
                                    className="w-full h-[90px] object-cover rounded-[5px]"
                                    alt=""
                                />
                                <div className="mt-1 flex flex-col gap-1">
                                    <div className="text-[11px] font-semibold text-[#023f76]">
                                        Trip to Scotland
                                    </div>

                                    <div className="flex items-center gap-1 text-[9px] text-[#023f76]">
                                        <User size={12} />
                                        <span>31 people going</span>
                                    </div>
                                </div>
                            </div>
                            {/* Duplicate cards if needed */}
                            <div className="w-[108px] rounded-[5px] bg-white p-1 shadow-md">
                                <img
                                    src="/assets/unsplash_GNdp2Q4VZjw.jpg"
                                    className="w-full h-[90px] object-cover rounded-[5px]"
                                    alt=""
                                />
                                <div className="mt-1 flex flex-col gap-1">
                                    <div className="text-[11px] font-semibold text-[#023f76]">
                                        Trip to Egypt
                                    </div>

                                    <div className="flex items-center gap-1 text-[9px] text-[#023f76]">
                                        <User size={12} />
                                        <span>27 people going</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[108px] rounded-[5px] bg-white p-1 shadow-md">
                                <img
                                    src="/assets/unsplash_MdTtpxGlrz8.jpg"
                                    className="w-full h-[90px] object-cover rounded-[5px]"
                                    alt=""
                                />
                                <div className="mt-1 flex flex-col gap-1">
                                    <div className="text-[11px] font-semibold text-[#023f76]">
                                        Trip to Greece
                                    </div>

                                    <div className="flex items-center gap-1 text-[9px] text-[#023f76]">
                                        <User size={12} />
                                        <span>20 people going</span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute left-[0%] top-[70%] w-[1024px]">

                                {/* OUTER WRAPPER */}
                                <div className="flex gap-4 bg-white/60 backdrop-blur-md p-5 rounded-[5px]">

                                    {/* INNER CONTAINER */}
                                    <div className="flex flex-1 p-4 h-[45px] rounded-[16px] overflow-hidden bg-white">

                                        {items.map((item, index) => {
                                            const Icon = item.icon;
                                            const isLast = index === items.length - 1;

                                            return (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-4 px-6 flex-1 relative"
                                                >
                                                    {/* ICON */}
                                                    <Icon size={20} className="text-[#beb4b4] shrink-0" />

                                                    {/* TEXT */}
                                                    <div className="flex flex-col ml-[-5px]">
                                                        <div className="text-[10px] text-[#3e4958] capitalize">
                                                            {item.title}
                                                        </div>
                                                        <div className="text-[10px] font-medium text-[#3e4958]">
                                                            {item.value}
                                                        </div>
                                                    </div>

                                                    {/* Chevron only for Guests */}
                                                    {item.title === "Guests" && index === items.length - 2 && (
                                                        <ChevronDown size={18} className="ml-auto text-[#beb4b4]" />
                                                    )}

                                                    {/* DIVIDER (skip before button) */}
                                                    {index < items.length - 2 && (
                                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[40px] w-[1px] bg-[#f9e3d6]" />
                                                    )}
                                                </div>
                                            );
                                        })}

                                    </div>
                                    <div className="flex items-center">
                                        <button className="ml-[-5px] flex items-center justify-center gap-1 w-[110px] h-[45px] bg-[#E7AC72] 
                                                    rounded-[12px] text-white text-[12px] font-semibold hover:bg-[#d9985e] transition shrink-0">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            {/* <div className="absolute w-[290px] h-[83px] text-[#023F76] 
                left-[85%] top-[97%]"> */}
            <div className="absolute w-[290px] h-[83px] text-[#023F76] 
                left-[85%] top-[90%]">
                www.nickelfox.com
            </div>
        </>
    );
};

export default TestComp;