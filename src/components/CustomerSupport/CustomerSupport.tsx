import {CheckIcon} from "@heroicons/react/24/solid";
import Image from "next/image";
// import customerSupport from "../../../../public/images/support.jpg";
import customerSupport from "@/../public/images/support.jpg";

const CustomerSupport = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16  items-center">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="order-2 lg:order-1"
        >
          <Image src={customerSupport} alt="customerSupport" />
        </div>
        <div className="order-1 lg:order-2">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
            className="text-[20px] md:text-[25px] lg:text-[40px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem]"
          >
            Customer support is our main priority with their <br /> 100%
            satisfaction.
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-anchor-placement="top-center"
            className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]"
          >
            To reduce your risks and help you get to know us better, we offer
            the first three days of work at no charge. This way, you can
            evaluate our skills and decide whether you want to work with us
            going forward.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-anchor-placement="top-center"
            className="flex items-center space-x-3 mb-[1rem]"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] font-[500] text-[#02073e]">
              Medical and Vision
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-anchor-placement="top-center"
            className="flex items-center space-x-3 mb-[1rem]"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] font-[500] text-[#02073e]">
              Life Insurance
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-anchor-placement="top-center"
            className="flex items-center space-x-3 mb-[1rem]"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] font-[500] text-[#02073e]">
              400(k) Savings
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-anchor-placement="top-center"
            className="flex items-center space-x-3 mb-[1rem]"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17px] font-[500] text-[#02073e]">
              HSAs and FSAs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
