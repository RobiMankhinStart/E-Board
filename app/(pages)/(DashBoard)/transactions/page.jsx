"use client";
import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import {
  MdKeyboardArrowDown,
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

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getProducts();
  }, []);

  const columns = [
    "Image",
    "Name",
    "SKU",
    "Price",
    "Status",
    "Qty",
    "Rating",
    "Sales",
    "Actions",
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 font-poppins">
      <h2 className="text-2xl md:text-3xl font-bold">Transaction List</h2>

      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 pt-3 pb-6 text-sm">
        <Link
          href="/dashboard"
          className="flex gap-1 items-center cursor-pointer hover:scale-105 transition"
        >
          <GoHome />
          Home/Dashboard
        </Link>
        <MdKeyboardDoubleArrowRight className="text-gray-400" />
        <span className="text-[#7364DB] cursor-pointer hover:scale-105 transition">
          Transaction List
        </span>
      </div>

      {/* Filters */}
      <div className="my-6 flex flex-wrap gap-3 justify-between">
        <button className="flex-1 min-w-[150px] sm:min-w-[180px] md:w-[225px] h-12 border border-[#E8EDF2] bg-white rounded-lg flex items-center justify-between px-3">
          <span className="text-gray-500 text-sm">All Category</span>
          <IoIosArrowDown className="text-gray-500" />
        </button>
        <button className="flex-1 min-w-[150px] sm:min-w-[160px] md:w-[174px] h-12 border border-[#E8EDF2] bg-white rounded-lg flex items-center justify-between px-3">
          <span className="text-gray-500 text-sm">10-02-2021</span>
          <CiCalendar className="text-lg text-gray-500" />
        </button>
        <button className="flex-1 min-w-[150px] sm:min-w-[160px] md:w-[174px] h-12 border border-[#E8EDF2] bg-white rounded-lg flex items-center justify-between px-3">
          <span className="text-gray-500 text-sm">Status</span>
          <CiCalendar className="text-lg text-gray-500" />
        </button>
        <button className="flex-1 min-w-[100px] sm:min-w-[90px] h-12 border border-[#E8EDF2] bg-white rounded-lg flex items-center justify-between px-3">
          <CiFilter className="text-lg text-gray-500" />
          <span className="text-gray-500 text-sm">Filters</span>
        </button>
      </div>

      {/* Transaction Section */}
      {["Pending Transactions", "Completed Transactions"].map(
        (section, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 md:p-6 mt-6">
            <h3 className="text-lg md:text-xl font-semibold border-b border-[#E8EDF2] pb-2 mb-2">
              {section}
            </h3>

            {/* Grid Table Header */}
            <div className="grid grid-cols-9 gap-2 text-gray-500 text-sm border-b border-[#E8EDF2] pb-2 mb-2 hidden md:grid">
              {columns.map((col) => (
                <div key={col} className="font-semibold">
                  {col}
                </div>
              ))}
            </div>

            {/* Product List */}
            <div className="flex flex-col gap-4">
              {products
                ?.slice(idx === 0 ? 0 : 5, idx === 0 ? 4 : 10)
                .map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-9 items-center gap-2 border-b border-[#E8EDF2] pb-2"
                  >
                    {/* Image */}
                    <div className="flex items-center gap-2">
                      <Image
                        src={item.thumbnail}
                        height={60}
                        width={60}
                        alt={item.title}
                        className="object-cover rounded-md"
                      />
                    </div>

                    {/* Name */}
                    <div className="flex flex-col text-sm md:text-base">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-400 text-xs line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* SKU */}
                    <p className="text-sm md:text-base">{item.sku || "N/A"}</p>

                    {/* Price */}
                    <p className="text-sm md:text-base">${item.price}</p>

                    {/* Status */}
                    <p className="text-sm md:text-base flex items-center gap-2">
                      <span className="bg-green-400 w-3 h-3 rounded-full"></span>{" "}
                      Active
                    </p>

                    {/* Qty */}
                    <p className="text-sm md:text-base">556</p>

                    {/* Rating */}
                    <div className="flex gap-1 text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    {/* Sales */}
                    <p className="text-sm md:text-base">186 / 2058</p>

                    {/* Actions */}
                    <button className="text-gray-500">
                      <SlOptions />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Page;
