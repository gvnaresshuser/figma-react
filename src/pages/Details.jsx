import { useLocation, useNavigate } from "react-router-dom";
import DetailsHero from "../components/Details/DetailsHero";
import DetailsInfo from "../components/Details/DetailsInfo";
import BookingCard from "../components/Details/BookingCard";

const Details = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    // fallback (if user refreshes page)
    const data = state || {
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        title: "Trip",
        people: "0 people"
    };

    return (
        <div className="min-h-screen bg-gray-50">

            <DetailsHero data={data} onBack={() => navigate(-1)} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 -mt-16 relative z-10">
                <DetailsInfo data={data} />
                <BookingCard />
            </div>

        </div>
    );
};

export default Details;