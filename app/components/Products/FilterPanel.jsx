"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

export default function FilterPanel() {
  const router = useRouter();
  const params = useSearchParams();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // single category
  const [searchTerm, setSearchTerm] = useState("");

  // Load selected filter from URL
  useEffect(() => {
    const urlCategory = params.get("categories");
    if (urlCategory) setSelectedCategory(urlCategory);
  }, [params]);

  // Fetch categories
  useEffect(() => {
    async function getCategories() {
      try {
        const res = await fetch("https://dummyjson.com/products/categories", {
          cache: "no-store",
        });
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log("fetching error:", error);
      }
    }
    getCategories();
  }, []);

  // Handle selecting a category (only one at a time)
  const handleChange = (categoryName) => {
    const newCategory = selectedCategory === categoryName ? "" : categoryName; // toggle

    setSelectedCategory(newCategory);

    // Update URL param
    const query = new URLSearchParams(params.toString());
    if (newCategory) {
      query.set("categories", newCategory);
    } else {
      query.delete("categories");
    }

    router.push(`?${query.toString()}`, { scroll: false });
  };

  // Filter categories for search
  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
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

        {/* Category list */}
        <div className="category space-y-2 mt-2">
          {filtered.map((category) => (
            <label
              key={category.name}
              className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-black"
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedCategory === category.name}
                  onChange={() => handleChange(category.name)}
                  className="accent-black w-4 h-4 rounded-sm cursor-pointer"
                />
                <span className="text-gray-600 font-semibold">
                  {category.name}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
