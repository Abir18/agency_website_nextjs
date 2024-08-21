import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";

interface Props {
  backgroundColor: string;
  num: string;
  price: string;
  plan: string;
}

const PriceCard = ({price, plan, num, backgroundColor}: Props) => {
  const large = num == "2" ? "lg:scale-110 scale-100 z-[100]" : "";
  return (
    <div className={`relative ${large} bg-gray-100 shadow-md transform`}>
      <div
        className={`${backgroundColor} h-[200px] flex flex-col justify-center items-center rounded-t-md`}
      >
        <p className="text-[20px] text-white font-[500] mb-[1.5rem]">{plan}</p>
        <h1 className="text-[20px] text-white">
          <span className="text-[30px] text-yellow-400 font-bold">
            ${price}
          </span>{" "}
          per month
        </h1>
      </div>
      <div className="p-4 text-center mt-4">
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-4">
          Full Access Library
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-4">
          Multiple Website
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-4">
          Next Js Project
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-4">
          Mern stack Project
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-4">
          TypeScript Project
        </p>
        <div className="mt-[1.5rem] mb-[1.5rem] text-center">
          {num != "2" && <ButtonRed text="Choose Plan" />}
          {num == "2" && <ButtonBlue text="Choose Plan" />}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
