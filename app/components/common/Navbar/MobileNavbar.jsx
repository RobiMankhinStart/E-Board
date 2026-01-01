"use client";
import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="md:hidden flex justify-between items-center">
        <HiMenu
          className="text-3xl cursor-pointer"
          onClick={() => setOpen(true)}
        />

        <Link href="/" className="text-xl font-semibold">
          ColourCart
        </Link>

        <Link href="/ShoppingCart">
          <IoCartOutline className="text-3xl" />
        </Link>
      </div>

      {/* Search */}
      <div className="md:hidden mt-3 p-3 bg-[#F5F5F5] rounded-lg flex items-center gap-2">
        <CiSearch className="text-2xl" />
        <input className="outline-none w-full" placeholder="Search..." />
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Slide Menu */}
      <div
        className={`fixed top-0 left-0 bg-white h-full w-[80%] max-w-[300px] z-50 p-6 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Menu</h3>
          <IoMdClose className="text-3xl" onClick={() => setOpen(false)} />
        </div>

        <ul className="flex flex-col gap-6 text-lg">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link href="/register" onClick={() => setOpen(false)}>
            Register
          </Link>

          <Link href="/login" className="flex gap-2 items-center">
            <FiUser />
            <span>Login</span>
          </Link>
        </ul>
      </div>
    </>
  );
}
