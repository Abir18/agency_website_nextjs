import icon1 from "@/../public/images/icon1.png";
import icon2 from "@/../public/images/icon2.png";
import support from "@/../public/images/supportteam.jpg";
import Image from "next/image";

const SupportTeam = () => {
  return (
    <div className="pt-[7rem] pb-[3rem]">
      <div className="w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="">
          <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            Do you need help? Our Support Team ready to help you
          </h1>
          <p className="text-gray-900 opacity-90 text-[17px] mt-4">
            We specialize in designing AI-powered applications, combining
            cutting-edge technology with intuitive design for enhanced user
            experiences
          </p>

          <div className="flex items-center space-x-6 mt-8">
            <Image src={icon1} alt="icon" width={60} height={60} />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-2">
                Email client support
              </h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85">
                Whether it is a large public platform or a small internal
                solution, we revamp its design to reach new goals and speed up
                its growth.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-8">
            <Image src={icon2} alt="icon" width={60} height={60} />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-2">
                Live ticket support
              </h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85">
                Be it a carsharing app or an internal service for a logistics
                company – the key to happy users is in comfortable UX that is
                easy to navigate.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <Image src={support} alt="support" />
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;
