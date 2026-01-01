"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const brands = [
  { name: "Apple", count: 110 },
  { name: "Samsung", count: 125 },
  { name: "Xiaomi", count: 68 },
  { name: "Poco", count: 44 },
  { name: "OPPO", count: 36 },
  { name: "Honor", count: 10 },
  { name: "Motorola", count: 34 },
  { name: "Nokia", count: 22 },
  { name: "Realme", count: 35 },
];

const Left = () => {
  const [categories, setcategories] = useState([]);
  // console.log("products Categories : ", categories);
  useEffect(() => {
    async function getcategories() {
      try {
        const res = await fetch("https://dummyjson.com/products/categories", {
          cache: "no-store",
        });
        const data = await res.json();
        setcategories(data);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getcategories();
  }, []);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (brandName) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((b) => b !== brandName)
        : [...prev, brandName]
    );
  };

  // Filter brands based on search
  const filteredBrands = categories.filter((brand) =>
    brand.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mainDiv w-full md:w-[260px] gap-4 flex flex-col p-3 border md:border-none rounded-md md:rounded-none">
      {/* Header */}
      <h2 className="header border-b border-[#B5B5B5] py-3 flex items-center justify-between font-inter text-xl font-medium">
        Categories
        <span>
          <IoIosArrowUp className="text-[24px]" />
        </span>
      </h2>

      {/* Search bar */}
      <div className="search bg-[#F5F5F5] h-10 gap-1 pl-4 flex items-center rounded">
        <CiSearch className="text-[22px]" />
        <input
          className="text-[#656565] bg-transparent border-none outline-none font-inter font-medium w-full"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category (brands) */}
      <div className="category space-y-2 mt-2">
        {filteredBrands.map((brand) => (
          <label
            key={brand.name}
            className="flex  items-center justify-between cursor-pointer text-gray-700 hover:text-black"
          >
            <div className="flex items-center space-x-3 ">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand.name)}
                onChange={() => handleChange(brand.name)}
                className="accent-black w-4 h-4 rounded-sm cursor-pointer"
              />
              <span className=" text-gray-600 font-semibold">{brand.name}</span>
            </div>
            {/* <span className="text-xs text-gray-500">{brand.count}</span> */}
          </label>
        ))}
      </div>

      {/* <h2 className="header border-b border-[#B5B5B5] py-3 flex items-center justify-between font-inter text-xl font-medium">
        Battery capacity
        <span>
          <IoIosArrowDown className="text-[24px]" />
        </span>
      </h2>
      <h2 className="header border-b border-[#B5B5B5] py-3 flex items-center justify-between font-inter text-xl font-medium">
        Screen type
        <span>
          <IoIosArrowDown className="text-[24px]" />
        </span>
      </h2>
      <h2 className="header border-b border-[#B5B5B5] py-3 flex items-center justify-between font-inter text-xl font-medium">
        Screen diagonal
        <span>
          <IoIosArrowDown className="text-[24px]" />
        </span>
      </h2>
      <h2 className="header border-b border-[#B5B5B5] py-3 flex items-center justify-between font-inter text-xl font-medium">
        Protection class
        <span>
          <IoIosArrowDown className="text-[24px]" />
        </span>
      </h2>
      <h2 className="header border-b border-[#B5B5B5] py-3 flex items-center justify-between font-inter text-xl font-medium">
        Built-in memory{" "}
        <span>
          <IoIosArrowDown className="text-[24px]" />
        </span>
      </h2> */}
    </div>
  );
};

export default Left;
