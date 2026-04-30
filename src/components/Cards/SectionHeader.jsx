const SectionHeader = () => {
    return (
        <div className="flex justify-between items-center text-white">

            <h2 className="
        text-lg sm:text-xl md:text-2xl
        font-semibold
        uppercase
      ">
                Most Popular
            </h2>

            {/* Arrow Icon */}
            <div className="
        w-8 h-8
        rounded-full
        border-2 border-white
        flex items-center justify-center
        cursor-pointer
        hover:bg-white hover:text-black
        transition
      ">
                →
            </div>

        </div>
    );
};

export default SectionHeader;