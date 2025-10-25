import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SlidingBanner = ({ data }) => {
  const slideItem = data.map((d) => (
    <SwiperSlide>
      <div className="w-full h-[500px] flex justify-center items-center gap-10 p-20 rounded-2xl bg-amber-50">
        <div className="w-1/2 space-y-5">
          <h1
            className=" text-5xl text-gray-700 font-bold"
          >
            {d.skillName}
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            {d.description}
          </p>
        </div>
        <img
          className="w-1/2 rounded-2xl border h-[350px]"
          src={d.image}
          alt=""
        />
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
