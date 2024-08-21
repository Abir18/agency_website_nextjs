interface Props {
  headingMini: string;
  headingPrimary: string;
}

const SectionHeading = ({headingMini, headingPrimary}: Props) => {
  return (
    <div className="text-center p-2">
      <p className="text-[#042439] md:text-[20px] text-[15px]">{headingMini}</p>
      <h1 className="text-[#02073e] md:text-[40px] text-[22px] mt-[0.5rem] font-bold">
        {headingPrimary}
      </h1>
    </div>
  );
};

export default SectionHeading;
