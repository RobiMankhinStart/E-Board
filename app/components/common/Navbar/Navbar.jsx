"use client";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  // const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    toast.success("Logged out!");
    // router.push("/login");
  };
  return (
    <nav className="hidden md:flex font-semibold justify-between items-center">
      {/* Logo */}
      <Link
        href={"/"}
        className="relative overflow-hidden bg-linear-to-r from-green-400 to-blue-500 text-white md:py-2 lg:py-2 md:px-4 lg:px-6 font-semibold rounded-xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:skew-x-12"
      >
        <span className="absolute top-0  left-0 w-full h-full bg-gray-50"></span>
        <span className=" relative z-10 text-gray-600 text-2xl font-inter">
          <span className="md:text-xl lg:text-3xl text-gray-600">C</span>olour
          <span className="md:text-xl lg:text-3xl text-gray-600">C</span>art
        </span>
      </Link>

      {/* Search */}
      <div className="md:w-[200px] lg:w-[302px] p-3 bg-[#F5F5F5] dark:bg-slate-700 text-[#989898] dark:text-gray-400 rounded-lg flex items-center gap-1 transition-colors duration-300">
        <CiSearch className="text-[24px]" />
        <input
          className="outline-none dark:bg-slate-700 dark:text-gray-300 transition-colors duration-300"
          type="text"
          placeholder="Search"
        />
      </div>

      {/* Menu */}
      <ul className="flex text-[#989898] dark:text-gray-400 items-center md:gap-4 lg:gap-7">
        <li className="hover:text-black dark:hover:text-white md:text-[15px] lg:text-[18px] font-medium transition-colors duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-black dark:hover:text-white md:text-[15px] lg:text-[18px] font-medium transition-colors duration-300">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-black dark:hover:text-white md:text-[15px] lg:text-[18px] font-medium transition-colors duration-300">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:text-black dark:hover:text-white md:text-[15px] lg:text-[18px] font-medium transition-colors duration-300">
          <Link href="/register">Register</Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center md:gap-3 lg:gap-6">
        <IoMdHeartEmpty className="md:text-2xl lg:text-[32px] cursor-pointer hover:text-[#989898] dark:hover:text-gray-300 hover:scale-110 duration-200 transition-colors" />

        <Link href="/ShoppingCart">
          <IoCartOutline className="md:text-2xl lg:text-[32px] cursor-pointer hover:text-[#989898] dark:hover:text-gray-300 hover:scale-110 duration-200 transition-colors" />
        </Link>

        <Link href="/login">
          <FiUser className="md:text-2xl lg:text-[32px] cursor-pointer hover:text-[#989898] dark:hover:text-gray-300 hover:scale-110 duration-200 transition-colors" />
        </Link>
        <Link onClick={handleLogout} href="/login">
          <CiLogout className="md:text-2xl lg:text-[32px] cursor-pointer hover:text-[#989898] dark:hover:text-gray-300 hover:scale-110 duration-200 transition-colors" />
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
