"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles once only
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProductDetails({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="wfull">
      {/* Main Swiper */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-lg"
      >
        {product?.images?.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt="product img"
              width={500}
              height={500}
              className="object-cover rounded-md w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4"
      >
        {product?.images?.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt="product thumbnail"
              width={100}
              height={100}
              className="object-cover rounded-md cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
