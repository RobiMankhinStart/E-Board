import React from "react";
import avator2 from "../../../../public/Avatar2.png";
import avator3 from "../../../../public/Avatar3.png";
import { SlOptionsVertical } from "react-icons/sl";
import Image from "next/image";

const BestSellers = () => {
  return (
    <div className="bg-[#ffff] rounded-lg border border-[#E8EDF2]  py-5">
      <div className="flex items-center justify-between px-6 pb-2">
        <h3 className="text-[16px] font-semibold font-poppins">Best Sellers</h3>
        <button className="text-[#9A9AAF]">
          <SlOptionsVertical />
        </button>
      </div>
      <div className="w-full h-0.5 bg-[#D8D8D8]"></div>
      <div className="flex flex-col gap-2">
        <div className="mt-3 px-6 flex items-center gap-4">
          <Image src={avator2} alt="avator2" />
          <div className="flex flex-col">
            <h3 className="font-poppins ">Cameron Williamson</h3>
            <p className="font-poppins text-[#9A9AAF]">MasterCard</p>
          </div>
          <div className="flex flex-col ml-10">
            <h3 className="font-poppins font-semibold">$446.61</h3>
            <p className="font-poppins text-[#9A9AAF]">985 sales</p>
          </div>
        </div>
        <div className="mt-3  px-6 flex items-center gap-4">
          <Image src={avator2} alt="avator2" />
          <div className="flex flex-col">
            <h3 className="font-poppins ">Cameron Williamson</h3>
            <p className="font-poppins text-[#9A9AAF]">MasterCard</p>
          </div>
          <div className="flex flex-col ml-10">
            <h3 className="font-poppins font-semibold">$446.61</h3>
            <p className="font-poppins text-[#9A9AAF]">985 sales</p>
          </div>
        </div>
        <div className="mt-3 px-6 flex items-center gap-4">
          <Image src={avator2} alt="avator2" />
          <div className="flex flex-col">
            <h3 className="font-poppins ">Cameron Williamson</h3>
            <p className="font-poppins text-[#9A9AAF]">MasterCard</p>
          </div>
          <div className="flex flex-col ml-10">
            <h3 className="font-poppins font-semibold">$446.61</h3>
            <p className="font-poppins text-[#9A9AAF]">985 sales</p>
          </div>
        </div>
        <div className="mt-3 px-6 flex items-center gap-4">
          <Image src={avator2} alt="avator2" />
          <div className="flex flex-col">
            <h3 className="font-poppins ">Cameron Williamson</h3>
            <p className="font-poppins text-[#9A9AAF]">MasterCard</p>
          </div>
          <div className="flex flex-col ml-10">
            <h3 className="font-poppins font-semibold">$446.61</h3>
            <p className="font-poppins text-[#9A9AAF]">985 sales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
