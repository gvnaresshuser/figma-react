import DatePickerInput from "@/components/DatePickerInput";

const SearchBar = () => {
    return (
        <div className="w-full mt-10">

            {/* Outer Glass Container */}
            <div className="
        bg-white/80 backdrop-blur-md
        rounded-xl
        shadow-lg
        p-3 sm:p-4
      ">

                {/* Inner Layout */}
                <div className="
          flex flex-col gap-4
          md:flex-row md:items-center md:gap-6
        ">

                    {/* Location */}
                    <div className="flex items-center gap-3 flex-1">
                        <span className="text-xl opacity-60">🏠</span>
                        <div>
                            <p className="text-xs text-gray-500">Location</p>
                            <p className="font-semibold text-gray-700">
                                Where are you going?
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-gray-300"></div>

                    {/* Check-in */}
                    <div className="flex items-center gap-3 flex-1 ">
                        {/* <span className="text-xl opacity-60">📅</span> */}
                        
                        <DatePickerInput label="Check-in" />
                     {/*    <div className="hidden md:block">
                            <p className="text-xs text-gray-500">Check-in</p>
                            <p className="font-semibold text-gray-700">
                                15 Sep 2026
                            </p>
                        </div> */}
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-gray-300"></div>

                    {/* Check-out */}
                    <div className="flex items-center gap-3 flex-1">
                        {/* <span className="text-xl opacity-60">📅</span> */}
                        <DatePickerInput label="Check-out" />
                       {/*  <div>
                            <p className="text-xs text-gray-500">Check-out</p>
                            <p className="font-semibold text-gray-700">
                                20 Sep 2026
                            </p>
                        </div> */}
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-gray-300"></div>

                    {/* Guests */}
                    <div className="flex items-center gap-3 flex-1">
                        <span className="text-xl opacity-60">👤</span>
                        <div>
                            <p className="text-xs text-gray-500">Guests</p>
                            <p className="font-semibold text-gray-700">
                                2 Adults
                            </p>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="
            bg-[#E7AC72]
            text-white
            px-6 py-3
            rounded-xl
            font-semibold
            hover:opacity-90
            transition
            w-full md:w-auto
          ">
                        Search
                    </button>

                </div>
            </div>

        </div>
    );
};

export default SearchBar;