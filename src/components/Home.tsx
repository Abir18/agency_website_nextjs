import Company from "./Company/Company";
import CustomerSupport from "./CustomerSupport/CustomerSupport";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Price from "./Price/Price";
import {Slider} from "./Slider/Slider";
import {SliderCarousel} from "./Slider/SliderCarousel";
import SupportTeam from "./SupportTeam/SupportTeam";

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Features />
      <SliderCarousel />
      <CustomerSupport />
      <Price />
      <SupportTeam />
      <Company />
    </div>
  );
};

export default Home;
