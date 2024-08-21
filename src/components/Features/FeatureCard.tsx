import Image from "next/image";

interface Props {
  image: string;
  title: string;
}

const FeatureCard = ({image, title}: Props) => {
  return (
    <div className="text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
      <Image
        src={image}
        alt="icon"
        height={70}
        width={70}
        className="mx-auto"
      />
      <h1 className="text-[20px] mt-[1.4rem] font-[500] text-[#02073e]">
        {title}
      </h1>
      <p className="mt-4 text-black opacity-90 text-[15px]">
        To ensure user satisfaction, the UI of fintech products must be
        user-friendly yet informative, and we can help with that!
      </p>
      <p className="mt-[1.4rem] text-red-600 font-[500]  hover:text-red-800">
        Learn More
      </p>
    </div>
  );
};

export default FeatureCard;
