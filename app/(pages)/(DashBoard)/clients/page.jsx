"use client";
import ReviewList from "@/app/components/DashBoard/ClientList/ReviewList";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiChevronDown, FiFilter } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 bg-[#F9FAFB] min-h-screen font-poppins">
      <h2 className="text-2xl md:text-3xl font-bold">Clients</h2>

      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 pt-3 pb-6 text-sm">
        <Link
          href="/dashboard"
          className="flex gap-1 items-center cursor-pointer hover:scale-105 transition"
        >
          <GoHome />
          Home
        </Link>
        <MdKeyboardDoubleArrowRight className="text-gray-400" />
        <span className="text-[#7364DB] cursor-pointer hover:scale-105 transition">
          Clients
        </span>
      </div>

      {/* Filters */}
      <div className="w-[90%]  flex flex-wrap gap-3 justify-between mt-5 mb-6">
        {/* Category */}
        <button className="flex-1 min-w-full md:min-w-[225px] flex items-center justify-between px-4 py-3 border border-[#E8EDF2] bg-white rounded-lg shadow-sm text-gray-500 text-sm">
          All Category <FiChevronDown className="text-lg" />
        </button>

        <div className="flex w-full lg:flex-row flex-col flex-wrap gap-3 flex-1 justify-end">
          {/* Date */}
          <button className="flex-1 min-w-full md:min-w-[180px] flex items-center justify-between px-4 py-3 border border-[#E8EDF2] bg-white rounded-lg shadow-sm text-gray-500 text-sm">
            10-02-2021 <FiChevronDown className="text-lg" />
          </button>

          {/* Status */}
          <button className="flex-1 min-w-full md:min-w-[180px] flex items-center justify-between px-4 py-3 border border-[#E8EDF2] bg-white rounded-lg text-gray-500 text-sm">
            Status <FiChevronDown className="text-lg" />
          </button>

          {/* Filters */}
          <button className="flex-1 min-w-full md:min-w-[90px] flex items-center justify-center gap-1 px-4 py-3 border border-[#E8EDF2] bg-white rounded-lg text-gray-500 text-sm">
            <FiFilter /> Filters
          </button>
        </div>
      </div>

      {/* Review List */}
      <ReviewList users={users} />
    </div>
  );
};

export default Page;
