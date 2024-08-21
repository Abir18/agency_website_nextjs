import company from "@/../public/images/customer.png";
import Image from "next/image";

const Company = () => {
  return (
    <div className="pt-24 pb-12">
      <h1 className="mb-6 font-bold text-[22px] md:text-[30px] text-center text-[#02073e]">
        Company who also worked with us
      </h1>
      <p className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center text-gray-950 opacity-80">
        Be it a carsharing app or an internal service for a logistics company –
        the key to happy users is in comfortable UX that is easy to navigate.
      </p>
      <p className="text-center mt-[1.5rem] font-[500] cursor-pointer text-blue-600">
        Explore Details
      </p>
      <div className="mt-8 text-center w-[80%] mx-auto">
        <Image src={company} alt="company" />
      </div>
    </div>
  );
};

export default Company;
