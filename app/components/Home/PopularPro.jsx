import Image from "next/image";
import Link from "next/link";
import React from "react";
import group1 from "../../../public/group1.png";

const PopularPro = () => {
  return (
    <div className="pt-14 sm:pt-16 md:pt-20">
      <div className="mainDiv mx-4 flex flex-wrap gap-4 justify-center">
        {/* Card 1 */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[23%] bg-[#F9F9F9] rounded-lg overflow-hidden">
          <div className="w-full">
            <Image className="w-full h-auto" src={group1} alt="group1" />
          </div>
          <div className="flex flex-col px-6 sm:px-8 pb-8 gap-4">
            <h3 className="font-inter font-light text-2xl sm:text-3xl md:text-[33px]">
              Popular Products
            </h3>
            <p className="text-sm sm:text-[14px] text-[#909090] font-medium font-inter">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block text-[16px] font-medium font-inter rounded-md border py-3 sm:py-4 px-6 sm:px-14 w-max"
              href={"/products"}
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[23%] bg-[#F9F9F9] rounded-lg overflow-hidden">
          <div className="w-full">
            <Image className="w-full h-auto" src={group1} alt="group1" />
          </div>
          <div className="flex flex-col px-6 sm:px-8 pb-8 gap-4">
            <h3 className="font-inter font-light text-2xl sm:text-3xl md:text-[33px]">
              Popular Products
            </h3>
            <p className="text-sm sm:text-[14px] text-[#909090] font-medium font-inter">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block text-[16px] font-medium font-inter rounded-md border py-3 sm:py-4 px-6 sm:px-14 w-max"
              href={"/products"}
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[23%] bg-[#F9F9F9] rounded-lg overflow-hidden">
          <div className="w-full">
            <Image className="w-full h-auto" src={group1} alt="group1" />
          </div>
          <div className="flex flex-col px-6 sm:px-8 pb-8 gap-4">
            <h3 className="font-inter font-light text-2xl sm:text-3xl md:text-[33px]">
              Popular Products
            </h3>
            <p className="text-sm sm:text-[14px] text-[#909090] font-medium font-inter">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block text-[16px] font-medium font-inter rounded-md border py-3 sm:py-4 px-6 sm:px-14 w-max"
              href={"/products"}
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[23%] bg-[#F9F9F9] rounded-lg overflow-hidden">
          <div className="w-full">
            <Image className="w-full h-auto" src={group1} alt="group1" />
          </div>
          <div className="flex flex-col px-6 sm:px-8 pb-8 gap-4">
            <h3 className="font-inter font-light text-2xl sm:text-3xl md:text-[33px]">
              Popular Products
            </h3>
            <p className="text-sm sm:text-[14px] text-[#909090] font-medium font-inter">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link
              className="inline-block text-[16px] font-medium font-inter rounded-md border py-3 sm:py-4 px-6 sm:px-14 w-max"
              href={"/products"}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPro;
