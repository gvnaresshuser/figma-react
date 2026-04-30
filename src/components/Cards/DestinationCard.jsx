import { useNavigate } from "react-router-dom";

const DestinationCard = ({ image, title, people }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/details", {
            state: { image, title, people }
        });
    };

    return (
        <div
            onClick={handleClick}
            className="
        cursor-pointer
        min-w-[170px] md:min-w-0
        bg-white/80 backdrop-blur-md
        border-2 border-white
        rounded-xl shadow-lg p-2
        hover:scale-105 transition
      "
        >
            <img
                src={image}
                alt={title}
                className="w-full h-36 object-cover rounded-md"
            />

            <div className="mt-2 px-1">
                <h3 className="text-sm font-medium text-[#023F76]">
                    {title}
                </h3>

                <p className="text-xs text-[#023F76] mt-1">
                    👥 {people}
                </p>
            </div>
        </div>
    );
};

export default DestinationCard;