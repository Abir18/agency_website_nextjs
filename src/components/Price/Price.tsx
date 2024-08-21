import SectionHeading from "../SectionHeading/SectionHeading";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <SectionHeading
        headingMini="Deal for your business"
        headingPrimary="Meet our pricing plan that suit you"
      />
      <div className="w-[80%] mx-auto pt-[6rem] gap-8 lg:gap-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <PriceCard
            backgroundColor="bg-[#81124a]"
            num="1"
            price={"19.99"}
            plan="Starter"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <PriceCard
            backgroundColor="bg-[#22840c]"
            num="2"
            price={"29.99"}
            plan="Premium Plan"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-anchor-placement="top-center"
        >
          <PriceCard
            backgroundColor="bg-[#112c60]"
            num="1"
            price={"99.99"}
            plan="Ultimate"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
