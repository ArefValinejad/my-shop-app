import Category from "./components/CategoryBoes";
import OfferBox from "./components/OfferBox";
import Banner from "./components/Banner";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="pl-20 pr-20 pt-5">
        <Category />
        <OfferBox />
      </div>
    </div>
  );
};

export default HomePage;
