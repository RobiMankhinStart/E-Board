"use client";

import React, { useEffect, useState } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const Category = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    async function getcategories() {
      try {
        const res = await fetch("https://dummyjson.com/products/categories", {
          cache: "no-store",
        });
        const data = await res.json();
        setcategories(data);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getcategories();
  }, []);

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="mainRow flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-between gap-4 sm:gap-0">
            <h3 className="font-inter font-semibold text-[20px] sm:text-[22px] md:text-[24px]">
              Our Product Categories
            </h3>

            <div className="flex gap-4">
              {/* Custom arrows */}
              <button className="prev-btn hover:scale-110 duration-200 hover:text-gray-600 text-3xl sm:text-4xl cursor-pointer">
                <IoIosArrowBack />
              </button>
              <button className="next-btn hover:scale-110 duration-200 hover:text-gray-600 text-3xl sm:text-4xl cursor-pointer">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          {/* Swiper */}
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full"
          >
            {categories.map((item, index) => (
              <SwiperSlide
                key={index}
                className="rounded-[15px] cursor-pointer bg-[#EDEDED] p-4 sm:p-5 md:p-6 flex items-center justify-center"
              >
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
                  <TbCategoryPlus className="text-[36px] sm:text-[42px] md:text-[46px]" />
                  <p className="text-lg sm:text-xl md:text-xl capitalize">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Optional custom pagination */}
          {/* <div className="custom-pagination mt-4 flex justify-center"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
