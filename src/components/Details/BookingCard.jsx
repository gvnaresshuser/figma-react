const BookingCard = () => {
    return (
        <div className="
      mt-6
      bg-gray-50 border border-blue-400 rounded-2xl shadow-lg
      mb-4
      p-4 sm:p-6
      flex flex-col sm:flex-row
      justify-between items-center gap-4
    ">

            <div>
                <p className="text-gray-500 text-sm">Price</p>
                <h2 className="text-xl font-bold text-gray-800">
                    ₹25,000 / person
                </h2>
            </div>

            <button className="
        bg-[#E7AC72]
        text-white
        px-6 py-3
        rounded-xl
        font-semibold
        hover:opacity-90
        active:scale-95
        transition
      ">
                Book Now
            </button>

        </div>
    );
};

export default BookingCard;