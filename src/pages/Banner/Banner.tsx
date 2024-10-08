import React from "react";
import ImgBanner from "../../assets/imgs/hero-img.png";

const Banner = () => {
  return (
    <div className="container mx-auto h-full relative ">
      <div className="flex flex-col xl:flex-row items-center h-full md:py-24">
        <div className="text-center xl:text-left">
          <h1
            className="h1 xl:max-w-[700px] mb-6 xl:mb-12"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Sava your data storage here.
          </h1>
          <p
            className="lead xl:max-w-[380px] mb-6 lg:mb-12"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <button
            className="btn btn-primary mb-8 xl:mb-0"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Learn more
          </button>
        </div>

        <div
          className="xl:absolute xl:-right-12 xl:bottom-16"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img src={ImgBanner} alt="img banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
