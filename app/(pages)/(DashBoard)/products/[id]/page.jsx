"use client";
import React from "react";
import {
  Bold,
  Italic,
  Underline,
  ImageIcon,
  LinkIcon,
  List,
  ListOrdered,
  Minus,
} from "lucide-react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProductGallery from "@/app/components/DashBoard/productsDetails/ProductGallery";
import UploadList from "@/app/components/DashBoard/productsDetails/UploadList";
import Link from "next/link";

const ProductDetails = () => {
  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-10">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold font-poppins">
          Orders List
        </h2>

        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 pt-3 pb-6">
          <Link
            href={"/dashboard"}
            className="flex gap-1 items-center hover:scale-105 duration-200"
          >
            <GoHome className="text-[#7E7E8F]" />
            <h3 className="text-[#7E7E8F] text-[12px]">Home/DashBoard</h3>
          </Link>

          <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />

          <Link
            href={"/dashboard/products"}
            className="text-[#7E7E8F] text-[12px] hover:scale-105 duration-200"
          >
            Products
          </Link>

          <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />

          <h3 className="text-[#7364DB] text-[12px] hover:scale-105 duration-200">
            Product Details
          </h3>
        </div>
      </div>

      {/* MAIN BODY */}
      <div className="w-full">
        <div className="flex flex-col lg:flex-row w-full justify-between bg-white rounded-xl shadow border border-gray-200 p-6 sm:p-8 gap-10">
          {/* LEFT SECTION */}
          <div className="space-y-6 w-full lg:w-1/2">
            {/* Product Name */}
            <div>
              <label className="text-[16px] font-medium">Product Name</label>
              <input
                type="text"
                placeholder="Type name here"
                className="mt-2.5 w-full border text-[14px] border-[#E8EDF2] rounded-lg py-3 px-3 outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-[16px] font-medium">Description</label>

              <div className="mt-2.5 border border-[#E8EDF2] rounded-xl bg-white pt-[13px] px-[13px]">
                <div className="flex gap-3 pb-2 text-[#7E7E8F]">
                  <Bold className="w-4 h-4 cursor-pointer" />
                  <Italic className="w-4 h-4 cursor-pointer" />
                  <Underline className="w-4 h-4 cursor-pointer" />
                  <ImageIcon className="w-4 h-4 cursor-pointer" />
                  <LinkIcon className="w-4 h-4 cursor-pointer" />
                  <List className="w-4 h-4 cursor-pointer" />
                  <ListOrdered className="w-4 h-4 cursor-pointer" />
                  <Minus className="w-4 h-4 cursor-pointer" />
                </div>

                <textarea
                  placeholder="Type description here"
                  className="w-full mt-3 h-32 p-3 rounded-xl outline-none"
                ></textarea>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="text-[16px] font-medium">Category</label>
              <select className="mt-2.5 w-full border border-[#E8EDF2] px-3 py-3 rounded-xl outline-none">
                <option>Select Category</option>
                <option value="watch">Smartwatch</option>
                <option value="headphone">Headphone</option>
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className="text-[16px] font-medium">Brand</label>
              <div className="mt-2 flex items-center border border-[#E8EDF2] rounded-xl px-3 py-3 bg-white">
                <input
                  type="text"
                  placeholder="Type Brand name"
                  className="w-full outline-none"
                />
                <FiChevronDown className="text-gray-500" />
              </div>
            </div>

            {/* SKU + Stock */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[16px] font-medium">SKU</label>
                <input
                  type="text"
                  placeholder="FOX-2983"
                  className="mt-2 border border-[#E8EDF2] rounded-xl p-3 w-full outline-none"
                />
              </div>

              <div>
                <label className="text-[16px] font-medium">
                  Stock Quantity
                </label>
                <input
                  type="text"
                  placeholder="1258"
                  className="mt-2 border border-[#E8EDF2] rounded-xl p-3 w-full outline-none"
                />
              </div>
            </div>

            {/* Regular + Sale Price */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
              <div>
                <label className="text-[16px] font-medium">Regular Price</label>
                <input
                  type="text"
                  placeholder="$500"
                  className="mt-2 border border-[#E8EDF2] rounded-xl p-3 w-full outline-none"
                />
              </div>

              <div>
                <label className="text-[16px] font-medium">Sale Price</label>
                <input
                  type="text"
                  placeholder="$450"
                  className="mt-2 border border-[#E8EDF2] rounded-xl p-3 w-full outline-none"
                />
              </div>
            </div>

            {/* Tax */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[16px] font-medium">Tax Status</label>
                <select className="mt-2 w-full border border-[#E8EDF2] p-3 rounded-xl outline-none">
                  <option>Taxable</option>
                  <option>None</option>
                </select>
              </div>

              <div>
                <label className="text-[16px] font-medium">Tax Class</label>
                <select className="mt-2 w-full border border-[#E8EDF2] p-3 rounded-xl outline-none">
                  <option>Standard</option>
                  <option>Reduced</option>
                </select>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <label className="text-[16px] font-medium">Tags</label>

              <div className="mt-3 border border-[#E8EDF2] rounded-xl p-3 flex flex-wrap gap-2 bg-white">
                {[
                  "smartwatch",
                  "Apple",
                  "Watch",
                  "smartphone",
                  "iPhone13 max",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm"
                  >
                    {tag}
                    <FiX className="cursor-pointer" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-1/2">
            <ProductGallery />
            <UploadList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
