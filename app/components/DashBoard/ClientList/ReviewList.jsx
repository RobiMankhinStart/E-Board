"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

export default function ReviewList({ users }) {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  // Close menu on click outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm w-full overflow-x-auto">
      <h2 className="text-base md:text-lg font-semibold text-[#07070C] border-b pb-3 border-[#E8EDF2]">
        Reviews List
      </h2>

      <div className="mt-4  w-full overflow-x-auto ">
        {/* HEADER */}
        <div className="hidden md:flex text-gray-400 text-sm font-semibold border-b border-[#E8EDF2] pb-2">
          <div className="flex-1 min-w-[150px] flex items-center gap-2">
            Customer
          </div>
          <div className="flex-1 min-w-[200px]">Comment</div>
          <div className="w-[100px]">Rating</div>
          <div className="w-[100px]">Date</div>
          <div className="w-[60px]">Actions</div>
        </div>

        {/* ROWS */}
        {users?.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-center border-b border-[#E8EDF2] py-3 gap-2 md:gap-0"
          >
            {/* CUSTOMER */}
            <div className="flex-1 min-w-[150px] md:min-w-[200px] flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 mt-1 shrink-0" />
              <div className="flex items-center gap-2 truncate">
                <Image
                  src={item.image}
                  width={50}
                  height={50}
                  alt="client"
                  className="rounded-md object-cover shrink-0"
                />
                <div className="truncate">
                  <p className="text-sm font-semibold text-[#07070C] truncate">
                    {item?.firstName ?? "Unknown User"}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {item?.email ?? "No email"}
                  </p>
                </div>
              </div>
            </div>

            {/* COMMENT */}
            <div className="flex-1 min-w-[200px] text-sm text-gray-500 line-clamp-2 wrap-break-word">
              {item?.comment ?? "No comment available."}
            </div>

            {/* RATING */}
            <div className="w-[100px] flex items-center gap-0.5 shrink-0">
              {Array.from({ length: item?.rating || 4 }).map((_, i) => (
                <AiFillStar key={i} className="text-yellow-500 text-base" />
              ))}
            </div>

            {/* DATE */}
            <div className="w-[100px] text-sm text-gray-500 shrink-0">
              {item?.date ?? "N/A"}
            </div>

            {/* ACTIONS */}
            <div className="w-[60px] relative shrink-0">
              <button
                className="p-2"
                onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
              >
                <FiMoreVertical size={18} />
              </button>

              {openMenu === idx && (
                <div
                  ref={menuRef}
                  className="absolute right-0 top-9 bg-white border border-[#E8EDF2] shadow-xl w-32 rounded-md p-2 z-50"
                >
                  <ul className="text-sm">
                    <li className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                      Approve
                    </li>
                    <li className="py-2 px-3 hover:bg-gray-100 cursor-pointer">
                      Reply
                    </li>
                    <li className="py-2 px-3 text-red-500 hover:bg-red-50 cursor-pointer">
                      Delete
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}

        {users?.length === 0 && (
          <p className="text-center text-gray-400 py-6">No reviews found.</p>
        )}
      </div>
    </div>
  );
}
