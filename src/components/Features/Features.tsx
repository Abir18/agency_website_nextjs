import SectionHeading from "@/components/SectionHeading/SectionHeading";
import FeatureCard from "./FeatureCard";

import icon1 from "@/../../public/images/icon1.png";
import icon2 from "@/../../public/images/icon2.png";
import icon3 from "@/../../public/images/icon3.png";
import icon4 from "@/../../public/images/icon4.png";
import icon5 from "@/../../public/images/icon5.png";

const Features = () => {
  return (
    <div className="pt-[1rem] pb-[1rem]">
      <SectionHeading
        headingMini="Ideal solution for you"
        headingPrimary="Explore Ultimate Features"
      />
      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <FeatureCard title="Email Subscription" image={icon1.src} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <FeatureCard title="Email Subscription" image={icon2.src} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <FeatureCard title="Data Encription" image={icon3.src} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-anchor-placement="top-center"
        >
          <FeatureCard title="Email Subscription" image={icon4.src} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-anchor-placement="top-center"
        >
          <FeatureCard title="Email Subscription" image={icon5.src} />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-anchor-placement="top-center"
        >
          <FeatureCard title="Email Subscription" image={icon2.src} />
        </div>
      </div>
    </div>
  );
};

export default Features;
