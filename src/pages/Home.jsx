import HeroSection from "../components/Hero/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/Hero/SearchBar/SearchBar";
import TitleSection from "../components/Hero/TitleSection";
import CardsSection from "../components/Cards/CardsSection";

const Home = () => {
    return (
        <HeroSection>
            <Navbar />
            <TitleSection />
            <SearchBar />
            <CardsSection />
        </HeroSection>
    );
};

export default Home;