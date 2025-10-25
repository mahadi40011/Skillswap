import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SlidingBanner = ({ data }) => {
  const slideItem = data.map((d) => (
    <SwiperSlide>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 bg-amber-50 rounded-2xl p-5 sm:p-8 md:p-12 lg:p-20">
        
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700">
            {d.skillName}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 leading-relaxed">
            {d.description}
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-md lg:max-w-full h-auto lg:h-[400px] rounded-2xl"
            src={d.image}
            alt={d.skillName}
          />
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop
      >
        {slideItem}
      </Swiper>
    </div>
  );
};

export default SlidingBanner;
