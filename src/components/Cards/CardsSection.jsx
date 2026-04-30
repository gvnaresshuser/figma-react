import SectionHeader from "./SectionHeader";
import CardList from "./CardList";

const data = [
    {
        title: "Trip To Scotland",
        people: "31 people going",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    },
    {
        title: "Trip To Egypt",
        people: "27 people going",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    },
    {
        title: "Trip To Greece",
        people: "20 people going",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    }
];

const CardsSection = () => {
    return (
        <div className="mt-12 max-w-xl">

            <SectionHeader />

            <CardList data={data} />

        </div>
    );
};

export default CardsSection;