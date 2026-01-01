// "use client";
// import React, { useEffect, useState } from "react";
// import { GoHome } from "react-icons/go";
// import {
//   MdKeyboardArrowDown,
//   MdKeyboardArrowUp,
//   MdKeyboardDoubleArrowRight,
// } from "react-icons/md";
// import product1 from "../../../../../public/product1.png";
// import product2 from "../../../../../public/product2.png";
// import Image from "next/image";
// import { CiCalendar, CiFilter, CiStar } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
// import { SlOptions } from "react-icons/sl";
// import { IoIosArrowDown } from "react-icons/io";
// import Link from "next/link";

// const page = () => {
//   const [products, setProducts] = useState([]);
//   console.log("products", products);
//   useEffect(() => {
//     async function getProducts() {
//       try {
//         const res = await fetch("https://dummyjson.com/products");
//         const data = await res.json();

//         setProducts(data.products);
//       } catch (error) {
//         console.log("fetching error : ", error);
//       }
//     }
//     getProducts();
//   }, []);
//   return (
//     <div className="px-[23px] font-poppins! ">
//       <h2 className="text-[28px] font-bold font-poppins">Transaction List</h2>
//       {/* bread Curmbs  */}
//       <div className="flex items-center gap-2 pt-3 pb-6">
//         <Link
//           href={"/dashboard"}
//           className=" flex gap-0.5 items-center cursor-pointer hover:scale-110 duration-200"
//         >
//           <GoHome />
//           <h3 className="text-[#7E7E8F] font-poppins text-[12px]">
//             Home/Dashboard
//           </h3>
//         </Link>
//         <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
//         <h3 className="text-[#7364DB] font-poppins text-[12px] cursor-pointer hover:scale-110 duration-200">
//           Transaction List
//         </h3>
//       </div>
//       {/* category  */}
//       <div className="my-6 flex items-center justify-between">
//         <button className="cursor-pointer w-[225px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
//           <p className="text-[#7E7E8F] text-[14px]">All Category</p>
//           <p className="text-[#7E7E8F] text-[14px]">
//             <IoIosArrowDown />
//           </p>
//         </button>
//         <div className="flex items-center gap-3">
//           <button className="cursor-pointer w-[174px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
//             <p className="text-[#7E7E8F] text-[14px]">10-02-2021</p>
//             <p className="text-[#7E7E8F] text-[18px]">
//               <CiCalendar />
//             </p>
//           </button>
//           <button className="cursor-pointer w-[174px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
//             <p className="text-[#7E7E8F] text-[14px]">Status</p>
//             <p className="text-[#7E7E8F] text-[18px]">
//               <CiCalendar />
//             </p>
//           </button>
//           <button className="cursor-pointer w-[90px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
//             <p className="text-[#7E7E8F] text-[18px]">
//               <CiFilter />
//             </p>
//             <p className="text-[#7E7E8F] text-[14px]">Filters</p>
//           </button>
//         </div>
//       </div>
//       {/* ...Pendings......  */}
//       <div className="proList rounded-xl p-6 bg-white">
//         {/* ...header .... */}
//         <h3 className="text-[18px] font-semibold border-b border-[#E8EDF2] pb-4 mb-2">
//           Pending Transactions
//         </h3>
//         <div className="w-full  border-b border-[#E8EDF2] pb-2 flex items-center gap-[235px]">
//           <div className="flex text-[#7E7E8F]! gap-14  items-center ">
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Image</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Name</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex text-[#7E7E8F]! gap-x-20  items-center ">
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">SKU</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Price</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Status</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">QTy</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Rating</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Sales</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* ......proList....  */}
//         <div className="pending-list">
//           {products?.slice(0, 4).map((item) => (
//             <div
//               key={item.id}
//               className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]"
//             >
//               <div className="flex text-[#7E7E8F]! gap-10  items-center ">
//                 <div className=" ">
//                   <Image
//                     src={item.thumbnail}
//                     height={80}
//                     width={82}
//                     alt="productImg"
//                   />
//                 </div>

//                 <div className="flex items-center gap-10 ">
//                   <div className="flex flex-col gap-1">
//                     <p className=" text-[16px] font-semibold">{item.title}</p>
//                     <p className="text-[12px] text-[#7E7E8F] w-[250px]">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex text-[#7E7E8F]! gap-14  items-center ">
//                 <p className=" text-[16px] text-[#7E7E8F]">{item.sku}</p>

//                 <p className=" text-[16px] ">${item.price}</p>

//                 <div className="flex items-center gap-2 ml-8 ">
//                   <div className="bg-[#50D1B2] size-3 rounded-full"></div>
//                   <p className=" text-[16px] ">Active</p>
//                 </div>
//                 <div className="flex items-center gap-10 ">
//                   <p className=" text-[16px] ml-10">556</p>
//                 </div>

//                 <div className="text-[#FEA73E] ml-9 text-[20px] flex items-center gap-1">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>

//                 <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
//                 <button className="cursor-pointer">
//                   <SlOptions />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* this is the completed transactions list  */}
//       {/* ...Completed......
//       .................. */}
//       <div className="Completed rounded-xl p-6 mt-6 bg-white">
//         {/* ...header .... */}
//         <h3 className="text-[18px] font-semibold border-b border-[#E8EDF2] pb-4 mb-2">
//           Completed Transactions
//         </h3>
//         <div className="w-full  border-b border-[#E8EDF2] pb-2 flex items-center gap-[235px]">
//           <div className="flex text-[#7E7E8F]! gap-14  items-center ">
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Image</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Name</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex text-[#7E7E8F]! gap-x-20  items-center ">
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">SKU</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Price</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Status</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">QTy</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Rating</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-10 ">
//               <div className="flex items-center gap-3">
//                 <p className=" text-[16px]">Sales</p>
//                 <div className="flex flex-col">
//                   <MdKeyboardArrowUp />
//                   <MdKeyboardArrowDown />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* ......proList....  */}

//         <div className="completed-list">
//           {products?.slice(5, 10).map((item) => (
//             <div
//               key={item.id}
//               className="w-full my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]"
//             >
//               <div className="flex text-[#7E7E8F]! gap-10  items-center ">
//                 <div className=" ">
//                   <Image
//                     src={item.thumbnail}
//                     height={80}
//                     width={82}
//                     alt="productImg"
//                   />
//                 </div>

//                 <div className="flex items-center gap-10 ">
//                   <div className="flex flex-col gap-1">
//                     <p className=" text-[16px] font-semibold">{item.title}</p>
//                     <p className="text-[12px] text-[#7E7E8F] w-[250px]">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex text-[#7E7E8F]! gap-14  items-center ">
//                 <p className=" text-[16px] text-[#7E7E8F]">{item.sku}</p>

//                 <p className=" text-[16px] ">${item.price}</p>

//                 <div className="flex items-center gap-2 ml-8 ">
//                   <div className="bg-[#50D1B2] size-3 rounded-full"></div>
//                   <p className=" text-[16px] ">Active</p>
//                 </div>
//                 <div className="flex items-center gap-10 ">
//                   <p className=" text-[16px] ml-10">556</p>
//                 </div>

//                 <div className="text-[#FEA73E] ml-9 text-[20px] flex items-center gap-1">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>

//                 <p className=" text-[14px] font-semibold ml-4">186 / 2058</p>
//                 <button className="cursor-pointer">
//                   <SlOptions />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
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

const page = () => {
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

export default page;
