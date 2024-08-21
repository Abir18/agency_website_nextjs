import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";

import HeroImg from "@/../public/images/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center justify-center flex-col ">
      <div className="grid grid-cols-1 lg:grid-cols-6 items-center w-[80%] mx-auto">
        <div className="col-span-3">
          <h1
            data-aos="fade-right"
            className="text-[27px] md:text-[35px] lg:text-[54px] mb-[1rem] font-[500] text-[#02073e] leading-[2.4rem] md:leading-[4rem] "
          >
            Exploring Innovative Paths to Cultivate Your Business
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="text-[15px] md:text-[20px] mb-[2rem] text-black opacity-90 font-[400] my-8 "
          >
            We help startups, scale-ups and unicorns to improve <br /> product
            metrics through design: ​Boost sales and revenue.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex items-center space-x-4 md:space-x-6"
          >
            <ButtonBlue text="Get Started" />
            <ButtonRed text="Explore Features" />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="col-span-3 hidden sm:block"
        >
          <Image src={HeroImg} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
