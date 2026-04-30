import { useState } from "react";

const SearchBar = () => {
    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("2026-09-15");
    const [checkOut, setCheckOut] = useState("2026-09-20");
    const [guests, setGuests] = useState(2);

    return (
        <div className="w-full mt-10">

            <div className="
        bg-white/50 backdrop-blur-lg
        rounded-xl shadow-xl
        p-4
      ">

                <div className="
          flex flex-col gap-4
          md:flex-row md:items-center md:gap-6
        ">

                    {/* Location */}
                    <div className="flex flex-col flex-1">
                        <label className="text-xs text-gray-500">Location</label>
                        <input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Where are you going?"
                            className="font-semibold outline-none bg-transparent"
                        />
                    </div>

                    <div className="hidden md:block w-px h-10 bg-gray-300" />

                    {/* Check-in */}
                    <div className="flex flex-col flex-1">
                        <label className="text-xs text-gray-500">Check-in</label>
                        <input
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                            className="font-semibold bg-transparent outline-none"
                        />
                    </div>

                    <div className="hidden md:block w-px h-10 bg-gray-300" />

                    {/* Check-out */}
                    <div className="flex flex-col flex-1">
                        <label className="text-xs text-gray-500">Check-out</label>
                        <input
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                            className="font-semibold bg-transparent outline-none"
                        />
                    </div>

                    <div className="hidden md:block w-px h-10 bg-gray-300" />

                    {/* Guests */}
                    <div className="flex flex-col flex-1">
                        <label className="text-xs text-gray-500">Guests</label>

                        <div className="flex items-center gap-2 mt-1">
                            <button
                                onClick={() => setGuests(Math.max(1, guests - 1))}
                                className="px-2 bg-gray-200 rounded"
                            >
                                −
                            </button>

                            <span className="font-semibold">{guests}</span>

                            <button
                                onClick={() => setGuests(guests + 1)}
                                className="px-2 bg-gray-200 rounded"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        onClick={() => {
                            console.log({ location, checkIn, checkOut, guests });
                        }}
                        className="
              bg-[#E7AC72]
              text-white px-6 py-3 rounded-xl
              font-semibold hover:opacity-90 transition
              w-full md:w-auto
            "
                    >
                        Search
                    </button>

                </div>
            </div>
        </div>
    );
};

export default SearchBar;