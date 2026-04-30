const DetailsHero = ({ data, onBack }) => {
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">

            <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            {/* Back */}
            <button
                onClick={onBack}
                className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-lg"
            >
                ← Back
            </button>

            {/* Title */}
            <div className="
                absolute
                text-white
                w-full px-4 py-4
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center   /* mobile center */
                sm:top-auto sm:left-6 sm:bottom-6 sm:translate-x-0 sm:translate-y-0 sm:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {data.title}
                </h1>

                <p className="text-sm sm:text-base opacity-80 mt-1">
                    Amazing Destination
                </p>
            </div>

        </div>
    );
};

export default DetailsHero;