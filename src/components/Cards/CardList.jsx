import DestinationCard from "./DestinationCard";

const CardList = ({ data = [] }) => {
    return (
        <div
            className="
        flex gap-4 mt-6 overflow-x-auto pb-2
        md:grid md:grid-cols-3 md:gap-6 md:overflow-visible
      "
        >
            {data.map((item, index) => (
                <DestinationCard key={index} {...item} />
            ))}
        </div>
    );
};

export default CardList;