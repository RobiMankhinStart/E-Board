"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";

const ProCard = ({ item }) => {
  if (!item) return null;
  const { thumbnail, price, title, id } = item;

  // add to cart
  const addToCArt = (id) => {
    const localID = JSON.parse(localStorage.getItem("nextProID")) || [];
    if (localID.includes(id)) {
      // console.log("Product already exists");
      alert("Already added!");
      return;
    }
    localID.push(id);
    localStorage.setItem("nextProID", JSON.stringify(localID));
  };
  return (
    <div className="w-[268px] h-[440px] bg-[#F6F6F6] shadow-md shadow-gray-400 rounded-[9px] px-2 py-5 flex flex-col gap-4 items-center justify-center">
      <div className=" w-full flex justify-end">
        {/* <CiHeart className="text-[32px] hover:scale-110 duration-200 cursor-pointer" /> */}
      </div>
      <Link
        href={`/products/${id}`}
        className=" cursor-pointer hover:scale-105 duration-300 shadow-md shadow-cyan-600 rounded-2xl p-2"
      >
        <Image src={thumbnail} height={170} alt="productImg" width={170} />
      </Link>
      {/* <img className="w-[160px]" src={thumbnail} alt="productImg" /> */}
      <h3 className=" ml-5 text-[16px] text-center flex justify-center font-medium font-inter">
        {title}
      </h3>
      <h3 className="text-[24px] font-semibold font-inter">${price}</h3>
      <button
        onClick={() => addToCArt(id)}
        className="cursor-pointer hover:bg-[#695b5b] py-3 px-16 font-semibold font-inter text-[14px] rounded-lg bg-black text-white flex items-center justify-center"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProCard;
