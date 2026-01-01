"use client";
import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Image from "next/image";
import { CiCalendar, CiFilter } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Page = () => {
  const [products, setProducts] = useState([]);

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
    <div className="px-4 md:px-[23px] font-poppins">
      <h2 className="text-[22px] md:text-[28px] font-bold">Orders List</h2>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 pt-3 pb-6 text-sm">
        <div className="flex gap-1 items-center cursor-pointer hover:scale-110 duration-200">
          <GoHome />
          <h3 className="text-[#7E7E8F]">Home/DashBoard</h3>
        </div>
        <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
        <h3 className="text-[#7364DB] hover:scale-110 duration-200 cursor-pointer">
          Order List
        </h3>
      </div>

      {/* Category & Filters */}
      <div className="my-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <button className="cursor-pointer w-full md:w-[225px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
          <p className="text-[#7E7E8F] text-[14px]">All Category</p>
          <IoIosArrowDown className="text-[#7E7E8F]" />
        </button>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="cursor-pointer flex-1 md:flex-none w-full md:w-[174px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
            <p className="text-[#7E7E8F] text-[14px]">10-02-2021</p>
            <CiCalendar className="text-[#7E7E8F]" />
          </button>

          <button className="cursor-pointer flex-1 md:flex-none w-full md:w-[174px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
            <p className="text-[#7E7E8F] text-[14px]">Status</p>
            <CiCalendar className="text-[#7E7E8F]" />
          </button>

          <button className="cursor-pointer flex-1 md:flex-none w-full md:w-[90px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
            <CiFilter className="text-[#7E7E8F]" />
            <p className="text-[#7E7E8F] text-[14px]">Filters</p>
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-between items-center mb-4 px-2">
        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          className="px-4 py-2 hover:text-textHover bg-bg rounded-lg text-sm hover:bg-secondary disabled:opacity-40"
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
          className="px-4 py-2 hover:text-textHover bg-bg rounded-lg text-sm hover:bg-secondary disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {/* PRODUCT LIST */}
      {/* ---------- PRODUCT LIST ---------- */}
      <div className="proList px-2 md:px-6">
        {/* HEADER */}
        <div
          className="
    hidden md:grid 
    grid-cols-9 
    border-b border-[#E8EDF2] 
    pb-2 text-[#7E7E8F] font-medium
  "
        >
          <p>Image</p>
          <p>Name</p>
          <p>SKU</p>
          <p>Price</p>
          <p>Status</p>
          <p>Qty</p>
          <p>Rating</p>
          <p>Sales</p>
          <p></p> {/* options */}
        </div>

        {/* ROWS */}
        {currentItems?.map((item) => (
          <div
            key={item.id}
            className="
        grid grid-cols-1 md:grid-cols-9 
        border-b border-[#E8EDF2] py-4 
        md:items-center gap-4
      "
          >
            {/* Image */}
            <div>
              <Image
                src={item.thumbnail}
                width={70}
                height={70}
                className="rounded-md"
                alt=""
              />
            </div>

            {/* Name + description */}
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-xs text-[#7E7E8F] line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* SKU */}
            <p className="text-sm text-[#7E7E8F]">{item.sku}</p>

            {/* Price */}
            <p className="font-medium">${item.price}</p>

            {/* Status */}
            <div className="flex items-center gap-2">
              <span className="bg-[#50D1B2] size-3 rounded-full"></span>
              <p>Active</p>
            </div>

            {/* Quantity */}
            <p>556</p>

            {/* Rating */}
            <div className="flex text-[#FEA73E] text-lg">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>

            {/* Sales */}
            <p className="font-semibold">186 / 2058</p>

            {/* Options */}
            <button className="ml-auto md:ml-0">
              <SlOptions />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
