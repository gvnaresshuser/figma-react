import HeroBackground from "./HeroBackground";

const HeroSection = ({ children }) => {
    return (
        <section className="
      relative
      w-full
      min-h-screen
      flex flex-col
      justify-start
      overflow-hidden
    ">

            {/* Background Layer */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    //src="{process.env.PUBLIC_URL}/assets/aerial-view-blue-sea-boat 1.png"
                    alt="hero-bg"
                    className="w-full h-full object-cover"
                />

                {/* Overlay (like Figma sand tint) */}
                <div className="absolute inset-0 bg-[#D2A77C]/40 mix-blend-multiply"></div>

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>

            <HeroBackground />
            {/* Content */}
            <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        w-full
        px-4 sm:px-6 md:px-10
      ">
                {children}
            </div>

        </section>
    );
};

export default HeroSection;