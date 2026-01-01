"use client";
import { useState } from "react";
import FilterPanel from "./FilterPanel";

export default function MobileFilter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Single mobile button */}
      <button
        onClick={() => setOpen(true)}
        className="block md:hidden px-4 py-2 border cursor-pointer hover:scale-110 duration-300 rounded-md font-medium mb-4"
      >
        Filters
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-out panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-50 shadow-lg
        transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="text-lg font-semibold">Filters</h3>

          <button onClick={() => setOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-60px)]">
          <FilterPanel />
        </div>
      </div>
    </>
  );
}
