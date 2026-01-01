// "use client";
// import React, { useEffect, useState } from "react";
// import { GoHome } from "react-icons/go";
// import {
//   MdKeyboardArrowDown,
//   MdKeyboardArrowUp,
//   MdKeyboardDoubleArrowRight,
// } from "react-icons/md";
// // import product1 from "../../../../../public/product1.png";
// // import product2 from "../../../../../public/product2.png";
// import Image from "next/image";
// import { CiCalendar, CiFilter, CiStar } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
// import { SlOptions } from "react-icons/sl";
// import { IoIosArrowDown } from "react-icons/io";
// import Link from "next/link";

// const page = () => {
//   const [products, setProducts] = useState([]);
//   console.log("products", products);

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;
//   useEffect(() => {
//     async function getProducts() {
//       try {
//         const res = await fetch("https://dummyjson.com/products?limit=100");
//         const data = await res.json();

//         setProducts(data.products);
//       } catch (error) {
//         console.log("fetching error : ", error);
//       }
//     }
//     getProducts();
//   }, []);

//   // Pagination calculations
//   const lastIndex = currentPage * itemsPerPage;
//   const firstIndex = lastIndex - itemsPerPage;
//   const currentItems = products.slice(firstIndex, lastIndex);

//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const goNext = () =>
//     currentPage < totalPages && setCurrentPage(currentPage + 1);
//   const goPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
//   return (
//     <div className="px-[23px] font-poppins! ">
//       <h2 className="text-[28px] font-bold font-poppins">Orders List</h2>

//       {/* bread Curmbs  */}
//       <div className="flex items-center gap-2 pt-3 pb-6">
//         <div className=" flex gap-0.5 items-center cursor-pointer hover:scale-110 duration-200">
//           <GoHome />
//           <h3 className="text-[#7E7E8F] font-poppins text-[12px]">
//             Home/DashBoard
//           </h3>
//         </div>
//         <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
//         <h3 className="text-[#7364DB] font-poppins text-[12px] cursor-pointer hover:scale-110 duration-200">
//           Order List
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
//       {/* .....................pagination......................  */}
//       <div className="w-full flex justify-between items-center mb-4 px-2">
//         <button
//           onClick={goPrev}
//           disabled={currentPage === 1}
//           className="px-4 py-2  hover:text-textHover rounded-lg bg-bg text-sm hover:bg-secondary disabled:opacity-40"
//         >
//           Previous
//         </button>

//         <p className="text-sm font-medium">
//           Page <span className="text-blue-500">{currentPage}</span> of{" "}
//           {totalPages}
//         </p>

//         <button
//           onClick={goNext}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 hover:text-textHover rounded-lg bg-bg text-sm hover:bg-secondary disabled:opacity-40"
//         >
//           Next
//         </button>
//       </div>
//       {/* ...productList......  */}
//       <div className="proList px-6">
//         {/* ...header .... */}
//         <div className="w-full border-b border-[#E8EDF2] pb-2 flex items-center gap-[235px]">
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
//         <div className="">
//           {currentItems?.map((item) => (
//             <div
//               key={item.id}
//               className="w-full  my-3 border-b border-[#E8EDF2] pb-2 flex items-center gap-[60px]"
//             >
//               <div className="flex  text-[#7E7E8F]! gap-10  items-center ">
//                 <Link
//                   href={"/dashboard/products/id"}
//                   className="hover:scale-110 duration-300"
//                 >
//                   <Image
//                     className=""
//                     src={item.thumbnail}
//                     height={80}
//                     width={82}
//                     alt="productImg"
//                   />
//                 </Link>

//                 <div className="flex items-center gap-10 ">
//                   <div className="flex flex-col gap-1">
//                     <Link
//                       href={"/dashboard/products/id"}
//                       className=" text-[16px] font-semibold hover:text-secondary hover:scale-110 duration-300"
//                     >
//                       {item.title}
//                     </Link>
//                     <p className="text-[14px]  h-16 overflow-y-hidden text-[#7E7E8F] w-[250px]">
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
  MdKeyboardArrowUp,
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log("fetching error : ", error);
      }
    }
    getProducts();
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = products.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const goNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="px-4 md:px-[23px] font-poppins">
      <h2 className="text-[22px] md:text-[28px] font-bold">Orders List</h2>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 pt-3 pb-6 text-sm">
        <div className="flex gap-1 items-center cursor-pointer hover:scale-110 duration-200">
          <GoHome />
          <h3 className="text-[#7E7E8F]">Home/DashBoard</h3>
        </div>
        <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
        <h3 className="text-[#7364DB] hover:scale-110 duration-200 cursor-pointer">
          Order List
        </h3>
      </div>

      {/* Category & Filters */}
      <div className="my-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <button className="cursor-pointer w-full md:w-[225px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
          <p className="text-[#7E7E8F] text-[14px]">All Category</p>
          <IoIosArrowDown className="text-[#7E7E8F]" />
        </button>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="cursor-pointer flex-1 md:flex-none w-full md:w-[174px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
            <p className="text-[#7E7E8F] text-[14px]">10-02-2021</p>
            <CiCalendar className="text-[#7E7E8F]" />
          </button>

          <button className="cursor-pointer flex-1 md:flex-none w-full md:w-[174px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
            <p className="text-[#7E7E8F] text-[14px]">Status</p>
            <CiCalendar className="text-[#7E7E8F]" />
          </button>

          <button className="cursor-pointer flex-1 md:flex-none w-full md:w-[90px] border border-[#E8EDF2] bg-white rounded-lg h-12 flex px-3 items-center justify-between">
            <CiFilter className="text-[#7E7E8F]" />
            <p className="text-[#7E7E8F] text-[14px]">Filters</p>
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-between items-center mb-4 px-2">
        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          className="px-4 py-2 hover:text-textHover bg-bg rounded-lg text-sm hover:bg-secondary disabled:opacity-40"
        >
          Previous
        </button>

        <p className="text-sm font-medium">
          Page <span className="text-blue-500">{currentPage}</span> of{" "}
          {totalPages}
        </p>

        <button
          onClick={goNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 hover:text-textHover bg-bg rounded-lg text-sm hover:bg-secondary disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {/* PRODUCT LIST */}
      {/* ---------- PRODUCT LIST ---------- */}
      <div className="proList px-2 md:px-6">
        {/* HEADER */}
        <div
          className="
    hidden md:grid 
    grid-cols-9 
    border-b border-[#E8EDF2] 
    pb-2 text-[#7E7E8F] font-medium
  "
        >
          <p>Image</p>
          <p>Name</p>
          <p>SKU</p>
          <p>Price</p>
          <p>Status</p>
          <p>Qty</p>
          <p>Rating</p>
          <p>Sales</p>
          <p></p> {/* options */}
        </div>

        {/* ROWS */}
        {currentItems?.map((item) => (
          <div
            key={item.id}
            className="
        grid grid-cols-1 md:grid-cols-9 
        border-b border-[#E8EDF2] py-4 
        md:items-center gap-4
      "
          >
            {/* Image */}
            <div>
              <Image
                src={item.thumbnail}
                width={70}
                height={70}
                className="rounded-md"
                alt=""
              />
            </div>

            {/* Name + description */}
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-xs text-[#7E7E8F] line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* SKU */}
            <p className="text-sm text-[#7E7E8F]">{item.sku}</p>

            {/* Price */}
            <p className="font-medium">${item.price}</p>

            {/* Status */}
            <div className="flex items-center gap-2">
              <span className="bg-[#50D1B2] size-3 rounded-full"></span>
              <p>Active</p>
            </div>

            {/* Quantity */}
            <p>556</p>

            {/* Rating */}
            <div className="flex text-[#FEA73E] text-lg">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>

            {/* Sales */}
            <p className="font-semibold">186 / 2058</p>

            {/* Options */}
            <button className="ml-auto md:ml-0">
              <SlOptions />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
