"use client";
import BestSellers from "@/app/components/DashBoard/DashHome/BestSellers";
import Bottom from "@/app/components/DashBoard/DashHome/Bottom";
import MainChart from "@/app/components/DashBoard/DashHome/MainChart";
import RecentPurchases from "@/app/components/DashBoard/DashHome/RecentPurchases";
import Top from "@/app/components/DashBoard/DashHome/Top";
import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const page = () => {
  const [products, setProducts] = useState([]);
  console.log("products", products);
  useEffect(() => {
    // const localIDs = JSON.parse(localStorage.getItem("nextProID")) || [];
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        // const filteringIDs = data.products.filter((item) =>
        //   localIDs.includes(item.id)
        // );
        setProducts(data.products);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getProducts();
  }, []);
  return (
    <div className="px-[23px] ">
      <h2 className="text-[28px] font-bold font-poppins">Home</h2>

      {/* bread Curmbs  */}
      <div className="flex items-center gap-2 pt-3 pb-6">
        <div className=" flex gap-0.5 items-center cursor-pointer hover:scale-110 duration-200">
          <GoHome />
          <h3 className=" text-[#7364DB] font-poppins text-[12px]">
            Home/Dashboard
          </h3>
        </div>
      </div>
      {/* ....top  */}
      <Top />
      <div className="flex flex-wrap sm:max-w-[400px] md:max-w-[600px] lg:max-w-full sm:flex-col lg:flex-row gap-3 justify-between ">
        <MainChart />
        <BestSellers />
      </div>
      <RecentPurchases products={products} />
      <Bottom />
    </div>
  );
};

export default page;
