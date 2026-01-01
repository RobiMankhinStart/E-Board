import React from "react";
// `https://dummyjson.com/products?limit=20&skip=10&select=title,price`,

import ProCard from "../Common/ProCard";
import Link from "next/link";

async function getProducts() {
  const res = await fetch(`https://dummyjson.com/products`, {
    cache: "no-store",
  });
  return res.json();
}
const HomeProList = async () => {
  const data = await getProducts();
  console.log("products : ", data);
  return (
    <div className="py-14">
      <div className="container">
        <div className="mainRow flex gap-8 text-[#8B8B8B] flex-col">
          <div className="header  flex items-center gap-4">
            <h3 className="text-[22px] hover:text-black hover:scale-110 duration-300  font-medium font-inter">
              GRAB
            </h3>
            <h3 className="text-[22px] hover:text-black hover:scale-110 duration-300  font-medium font-inter">
              YOUR
            </h3>
            <h3 className="text-[22px] hover:text-black hover:scale-110 duration-300  font-medium font-inter">
              NEEDS
            </h3>
          </div>
          <div className="flex lg:items-start md:items-center sm:items-center flex-wrap gap-5">
            {data?.products.slice(0, 9).map((item) => (
              <ProCard key={item.id} item={item} />
            ))}{" "}
            <div className=" w-[268px] h-[440px]  shadow-md shadow-gray-400 rounded-[9px] px-2 py-5 flex flex-col gap-4 items-center justify-center">
              <Link
                className="inline-block font-semibold cursor-pointer hover:scale-110 duration-300 border rounded-md text-[18px] px-10 py-3 mt-2"
                href={"/products"}
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProList;
