import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "../../Slider.css";

import { Pagination } from "swiper/modules";
import { testimonialsData } from "../../data/data"; // Import data

const Slider = () => {
  return (
    <Swiper
      centeredSlides={true}
      spaceBetween={20}
      slidesPerView={"auto"}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {testimonialsData.map((slider, index) => (
        <SwiperSlide
          className="bg-white rounded-[10px] border border-accent-primary xl:max-w-[600px] max-h-[330px] pt-[60px]  px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-lg"
          key={index}
        >
          <img src={slider.image} alt="img slider" />
          <div className="flex flex-col gap-y-2">
            <h3 className="text-xl font-semibold text-primary">
              {slider.name}
            </h3>
            <p className="text-md text-violet-500">{slider.web}</p>
            <p className="text-gray-700 max-w-[340px]">{slider.message}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
