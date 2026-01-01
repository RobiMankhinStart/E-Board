"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import favicon from "../../../../public/favicon.png";
import person1 from "../../../../public/personimg1.png";
import person2 from "../../../../public/personimg2img.png";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import { RiBarChartBoxAiLine } from "react-icons/ri";
import { CiSquarePlus } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";

const menuItems = [
  "Dashboard",
  "Products",
  "Orders",
  "Payments",
  "Transactions",
  "Clients",
];

const SideNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Mobile toggle
  const [open, setOpen] = useState(false);

  const isActive = (item) => {
    if (item === "Dashboard") return pathname === "/dashboard";
    return pathname.includes(item.toLowerCase());
  };

  const handleClick = (item) => {
    const path =
      item === "Dashboard" ? "/dashboard" : `/dashboard/${item.toLowerCase()}`;
    router.push(path);
  };

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        className="lg:hidden fixed top-5 left-4 z-[9999] bg-white dark:bg-slate-700 p-2 rounded-lg shadow transition"
        onClick={() => setOpen(true)}
      >
        <RiMenu4Line className="text-[22px]" />
      </button>

      {/* SIDEBAR WRAPPER */}
      <div
        className={`
          fixed lg:static top-0 left-0 h-full w-[260px] 
          bg-white dark:bg-slate-900 shadow-lg lg:shadow-none 
          transition-transform duration-300 z-[9998]
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* CLOSE BUTTON (MOBILE) */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full border shadow"
          >
            <MdOutlineArrowBackIosNew className="text-[20px]" />
          </button>
        </div>

        {/* Logo */}
        <div className="logo p-6 flex items-center gap-2">
          <Image src={favicon} alt="iconLogo" />
          <h2 className="font-semibold text-[24px] text-primary">Frox</h2>
        </div>

        {/* MENU ITEMS */}
        <div className="p-4 flex flex-col gap-0.5">
          {menuItems.map((item) => (
            <div
              key={item}
              onClick={() => {
                handleClick(item);
                setOpen(false); // auto close mobile
              }}
              className={`flex items-center gap-2 hover:scale-105 w-[200px] h-14 pl-[21px] rounded-xl cursor-pointer duration-300
                ${isActive(item) ? "bg-[#7364DB] text-white" : "text-primary"}
              `}
            >
              <RiBarChartBoxAiLine className="text-[22px]" />
              <h3 className="font-semibold text-[14px]">{item}</h3>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-5 ml-6">
          <h3 className="text-sm font-semibold py-3 pl-6 text-gray-800 dark:text-gray-200">
            Categories
          </h3>

          {[
            { name: "Laptops", color: "#ECE663", count: 8 },
            { name: "Mobile phones", color: "#EC8C56", count: 8 },
            { name: "Desktops", color: "#ECE663", count: "" },
            { name: "Accessories", color: "#FB7BB8", count: 8 },
            { name: "Portable storage", color: "#50D1B2", count: 8 },
            { name: "Portable storage", color: "#ECE663", count: "" },
          ].map((cat, i) => (
            <div
              key={i}
              className="flex items-center py-3 p-6 justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
            >
              <h3 className="text-[14px] text-[#7E7E8F] dark:text-gray-400">
                {cat.name}
              </h3>
              {cat.count !== "" && (
                <p
                  className="text-[11px] rounded-md px-1"
                  style={{ background: cat.color }}
                >
                  {cat.count}
                </p>
              )}
            </div>
          ))}

          <div className="flex items-center py-3 p-6 gap-3 cursor-pointer hover:text-[#7364DB] dark:text-gray-400">
            <CiSquarePlus className="text-[#7E7E8F] text-[20px]" />
            <h3 className="text-[14px] font-medium">Add category</h3>
          </div>
        </div>

        {/* Top Sellers */}
        <div className="mt-10 ml-[51px] flex flex-col gap-4">
          <h3 className="text-[14px] font-semibold text-gray-800 dark:text-gray-200">
            Top Sellers
          </h3>

          <div className="flex items-center">
            <Image src={person1} alt="person" />
            <Image src={person2} alt="person" className="-ml-[5%]" />
            <Image src={person1} alt="person" className="-ml-[5%]" />
            <Image src={person2} alt="person" className="-ml-[5%]" />
            <div className="p-2 rounded-full bg-[#7364DB] -ml-[5%] cursor-pointer hover:scale-110">
              <FiPlusCircle className="text-[18px] text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* BACKDROP FOR MOBILE */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 lg:hidden z-[9990]"
        ></div>
      )}
    </>
  );
};

export default SideNav;
