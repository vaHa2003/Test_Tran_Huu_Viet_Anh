import React from "react";
import { TryFree } from "../../data/data";
import { BsArrowRight } from "react-icons/bs";

const TryForFree = () => {
  const { title, subtitle, btnText1, btnText2 } = TryFree;
  return (
    <div className="my-[70px] xl:my-[150px] border-t-2" data-aos="fade-up">
      <div className="container mx-auto">
        <div
          className="flex flex-col xl:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <div className="py-10 xl:py-24 text-center xl:text-left">
            <h2 className="h2 mb-[20px]">{title}</h2>
            <p className="font-semibold">{subtitle}</p>
          </div>

          <div className="flex flex-col xl:flex-row gap-6">
            <button className="btn bg-pink-400  hover:bg-[#ef63b9]">
              {btnText1}
            </button>
            <button className="btn btn-quaternary flex items-center gap-x-[20px] group">
              {btnText2}
              <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryForFree;
