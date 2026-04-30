import Waves from "../Background/Waves";
import SandOverlay from "../Background/SandOverlay";
import Boat from "../Background/Boat";

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">

            {/* Base Image */}
            <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="sea"
                className="w-full h-full object-cover"
            />

            {/* Sand Overlay */}
            <SandOverlay />

            {/* Waves Layer */}
            <Waves />

            {/* Boat */}
            <Boat />

            {/* Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>
    );
};

export default HeroBackground;