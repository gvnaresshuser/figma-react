import { useState } from "react";

const ResponsiveLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 
    bg-gradient-to-r from-[#7b95e4] via-[#4CAF50] to-[#dee51e]  ">

      {/* ================= HEADER ================= */}
      <header className="relative w-full">

        {/* NAVBAR */}
        <div className="flex justify-between items-center py-4">

          {/* LOGO */}
          <div className="text-lg font-bold">LOGO</div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6">
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/80 text-white flex flex-col items-center justify-center gap-6 z-50">
            <div onClick={() => setMenuOpen(false)}>Home</div>
            <div onClick={() => setMenuOpen(false)}>About</div>
            <div onClick={() => setMenuOpen(false)}>Services</div>
            <div onClick={() => setMenuOpen(false)}>Contact</div>
          </div>
        )}
      </header>

      {/* ================= HERO / SECTION ================= */}
      <section className="
        min-h-[600px] 
        sm:min-h-[700px] 
        md:min-h-[500px] 
        lg:min-h-[600px]
        flex flex-col justify-center
      ">
        <h1 className="
          text-[22px] 
          sm:text-[26px] 
          md:text-[32px] 
          lg:text-[40px] 
          font-bold
        ">
          Responsive Heading
        </h1>

        <p className="mt-3 text-sm md:text-base text-black">
          This layout adapts automatically across screen sizes.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mt-6">

        {/* FLEX RESPONSIVE BLOCK */}
        <div className="flex flex-col md:flex-row gap-4">

          {/* LEFT */}
          <div className="flex-1 bg-gray-100 p-4 rounded-xl">
            Left Content
          </div>

          {/* RIGHT */}
          <div className="flex-1 bg-gray-200 p-4 rounded-xl">
            Right Content
          </div>

        </div>

        {/* SCROLLABLE CARDS (Mobile) */}
        <div className="
          mt-6 flex gap-3 
          overflow-x-auto md:overflow-visible
        ">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                min-w-[140px] 
                md:min-w-0 md:w-[200px]
                bg-white shadow rounded-lg p-3
              "
            >
              Card {item}
            </div>
          ))}
        </div>

      </section>

      {/* ================= BUTTON ================= */}
      <div className="mt-6">
        <button className="
          w-full md:w-[200px] 
          h-[45px] 
          bg-blue-500 text-white 
          rounded-lg
        ">
          Action Button
        </button>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="mt-10 text-center text-sm text-black py-4">
        © 2026 Your App
      </footer>

    </div>
  );
};

export default ResponsiveLayout;