const TitleSection = () => {
    return (
        <div className="mt-16 md:mt-24 max-w-xl text-white">

            {/* Categories Row */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-medium uppercase tracking-wide opacity-90">
                <span>Mountains</span>
                <span className="w-[2px] h-3 bg-white"></span>
                <span>Plains</span>
                <span className="w-[2px] h-3 bg-white"></span>
                <span>Beaches</span>
            </div>

            {/* Main Heading */}
            <h1 className="
        mt-4
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        font-bold
        leading-tight
      ">
                Spend your vacation <br />
                with our activities
            </h1>

        </div>
    );
};

export default TitleSection;