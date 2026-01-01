"use client";
import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import Link from "next/link";

const Page = () => {
  const [products, setProducts] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getProducts();
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = products.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const goNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="px-4 md:px-6 lg:px-10 font-poppins">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold">All Products</h2>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 pt-3 pb-6">
        <Link
          href={"/dashboard"}
          className="flex gap-1 items-center cursor-pointer hover:scale-110 duration-200"
        >
          <GoHome className="mb-0.5" />
          <h3 className="text-[#7E7E8F] text-xs">Home / Dashboard</h3>
        </Link>
        <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
        <h3 className="text-[#7364DB] text-xs">All Products</h3>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-between items-center mb-4">
        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-lg bg-bg hover:bg-secondary text-sm disabled:opacity-40"
        >
          Previous
        </button>

        <p className="text-sm font-medium">
          Page <span className="text-blue-500">{currentPage}</span> of{" "}
          {totalPages}
        </p>

        <button
          onClick={goNext}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded-lg bg-bg hover:bg-secondary text-sm disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {/* Product List Container */}
      <div className="bg-background w-full rounded-xl p-4 md:p-6">
        {/* TABLE HEADER (Desktop only) */}
        <div className="hidden md:grid grid-cols-7 pb-4 border-b border-[#E8EDF2] text-primary font-medium">
          <p className="flex items-center gap-1">Image</p>
          <p className="flex items-center gap-1">Name</p>
          <p className="flex items-center gap-1">SKU</p>
          <p className="flex items-center gap-1">Price</p>
          <p className="flex items-center gap-1">Status</p>
          <p className="flex items-center gap-1">Qty</p>
          <p className="flex items-center gap-1">Rating</p>
        </div>

        {/* Product Items */}
        <div>
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-[#E8EDF2] py-4 md:grid md:grid-cols-7 flex flex-col gap-3"
            >
              {/* IMAGE + NAME (Mobile stacked) */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.thumbnail}
                  width={70}
                  height={70}
                  alt="product"
                  className="rounded-md"
                />
                <div className="md:hidden flex flex-col">
                  <p className="text-base font-semibold">{item.title}</p>
                  <p className="text-sm text-[#7E7E8F] line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* NAME (Desktop only) */}
              <div className="hidden md:flex flex-col">
                <p className="text-base font-semibold">{item.title}</p>
                <p className="text-sm text-[#7E7E8F] line-clamp-2">
                  {item.description}
                </p>
              </div>

              <p className="text-[#7E7E8F]">{item.sku}</p>
              <p className="font-medium">${item.price}</p>

              <div className="flex items-center gap-2">
                <div className="size-3 bg-[#50D1B2] rounded-full"></div>
                <p className="">Active</p>
              </div>

              <p className="">{item.stock ?? 556}</p>

              <div className="flex items-center gap-1 text-[#FEA73E] text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
