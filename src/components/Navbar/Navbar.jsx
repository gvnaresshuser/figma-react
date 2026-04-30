import { useState } from "react";

const Navbar = () => {
    const links = ["Home", "About Us", "Premium", "Blogs"];
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full absolute top-0 left-0 z-50">

            <div className="
        max-w-7xl mx-auto
        px-4 sm:px-6 md:px-10
        pt-6
        flex items-center justify-between
        text-white
      ">

                {/* Logo */}
                <div className="text-lg sm:text-xl font-semibold">
                    Travel
                </div>

                {/* Desktop Menu */}
                <nav className="
          hidden md:flex items-center
          gap-10 lg:gap-14
          font-semibold text-sm lg:text-base
        ">
                    {links.map((item) => (
                        <a key={item} href="#" className="relative group">
                            {item}
                            <span className="
                absolute left-0 -bottom-1 w-0 h-[2px]
                bg-white transition-all duration-300
                group-hover:w-full
              " />
                        </a>
                    ))}
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-3">

                    {/* Explore Button */}
                    <button className="
            hidden sm:block
            border-2 border-white
            px-4 py-2 rounded-xl
            font-semibold
            hover:bg-white hover:text-black
            transition
          ">
                        Explore
                    </button>

                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col gap-1"
                    >
                        <span className={`w-6 h-[2px] bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                        <span className={`w-6 h-[2px] bg-white transition ${open ? "opacity-0" : ""}`} />
                        <span className={`w-6 h-[2px] bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
                    </button>

                </div>
            </div>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                />
            )}

            {/* Mobile Menu */}
            <div className={`
        fixed top-0 right-0 h-full w-[75%] max-w-sm
        bg-white text-gray-800
        shadow-lg z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}>

                <div className="p-6 flex flex-col gap-6">

                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="text-right text-xl"
                    >
                        ✕
                    </button>

                    {/* Links */}
                    {links.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-lg font-semibold border-b pb-2"
                            onClick={() => setOpen(false)}
                        >
                            {item}
                        </a>
                    ))}

                    {/* Explore Button */}
                    <button className="
            mt-4
            bg-[#E7AC72]
            text-white
            py-3 rounded-xl
            font-semibold
          ">
                        Explore
                    </button>

                </div>
            </div>

        </header>
    );
};

export default Navbar;