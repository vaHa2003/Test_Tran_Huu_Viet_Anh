import { copyrightData } from "../../data/data";

const CopyRight = () => {
  const { text, icon } = copyrightData;
  return (
    <div className="my-[70px] py-[48px]" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 xl:flex-row xl:justify-between">
          <div className="max-w-[410px] italic text-sm">{text}</div>
          <div className="bg-violet-400 w-[60px] h-[60px] flex items-center justify-center rounded-full text-white cursor-pointer">
            <div className="text-3xl"> {icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
