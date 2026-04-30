const DetailsInfo = ({ data }) => {
    return (
        <div className="
      bg-white rounded-2xl shadow-xl
      p-5 sm:p-6 md:p-8
      space-y-6
    ">

            {/* Title */}
            <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {data.title}
                </h2>
                <p className="text-sm text-gray-500">
                    A perfect destination for your next adventure
                </p>
            </div>

            {/* Stats Row */}
            <div className="
        grid grid-cols-3 gap-4
        text-center
      ">
                <div className="bg-red-100 rounded-xl p-3 shadow-sm">
                    <p className="text-yellow-500 text-lg">⭐</p>
                    <p className="text-sm font-semibold text-gray-700">4.8</p>
                    <p className="text-xs text-gray-500">Rating</p>
                </div>

                <div className="bg-green-100 rounded-xl p-3 shadow-sm">
                    <p className="text-blue-500 text-lg">👥</p>
                    <p className="text-sm font-semibold text-gray-700">
                        {data.people}
                    </p>
                    <p className="text-xs text-gray-500">Travellers</p>
                </div>

                <div className="bg-blue-100 rounded-xl p-3 shadow-sm">
                    <p className="text-green-500 text-lg">📅</p>
                    <p className="text-sm font-semibold text-gray-700">5 Days</p>
                    <p className="text-xs text-gray-500">Duration</p>
                </div>
            </div>

            {/* Description */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    About Trip
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Enjoy your trip to <span className="font-semibold">{data.title}</span>.
                    Experience breathtaking landscapes, vibrant culture, and unforgettable
                    adventures. Whether you’re seeking relaxation or exploration, this
                    destination offers the perfect balance of both.
                </p>
            </div>

            {/* Highlights */}
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Highlights
                </h3>

                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        ✔ Scenic views & landscapes
                    </li>
                    <li className="flex items-center gap-2">
                        ✔ Cultural experiences
                    </li>
                    <li className="flex items-center gap-2">
                        ✔ Local cuisine & food tours
                    </li>
                    <li className="flex items-center gap-2">
                        ✔ Adventure activities
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default DetailsInfo;