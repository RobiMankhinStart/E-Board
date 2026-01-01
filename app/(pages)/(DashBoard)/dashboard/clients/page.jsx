// "use client";
// import ReviewList from "@/app/components/DashBoard/ClientList/ReviewList";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FiChevronDown, FiFilter } from "react-icons/fi";
// import { GoHome } from "react-icons/go";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// // import ReviewsList from "../../components/client/ReviewsList";

// const page = () => {
//   const [users, setUsers] = useState([]);
//   console.log("products", users);
//   useEffect(() => {
//     async function getUsers() {
//       try {
//         const res = await fetch("https://dummyjson.com/users");
//         const data = await res.json();

//         setUsers(data.users);
//       } catch (error) {
//         console.log("fetching error : ", error);
//       }
//     }
//     getUsers();
//   }, []);
//   return (
//     <>
//       <div className="px-[23px] md:p-6 lg:p-8 bg[#F9FAFB] min-h-screen">
//         <h2 className="text-[28px] font-bold font-poppins">Clients</h2>

//         {/* bread Curmbs  */}
//         <div className="flex items-center gap-2 pt-3 pb-6">
//           <Link
//             href={"/dashboard"}
//             className=" flex gap-0.5 items-center cursor-pointer hover:scale-110 duration-200"
//           >
//             <GoHome />
//             <h3 className="text-[#7E7E8F] font-poppins text-[12px]">Home</h3>
//           </Link>
//           <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
//           <h3 className="text-[#7364DB] font-poppins text-[12px] cursor-pointer hover:scale-110 duration-200">
//             Clients
//           </h3>
//         </div>
//         {/* Filters */}
//         <div className="flex justify-between mt-5 mb-[26px]">
//           {/* Category */}
//           <div className="">
//             <button className="w-[225px] text-[14px] font-normal font-main text-[#7E7E8F] border border-[#E8EDF2] flex items-center justify-between py-4 px-[15px] bg-white rounded-lg shadow-sm">
//               All Category <FiChevronDown className="text-[20px]" />
//             </button>
//           </div>

//           <div className="flex items-center gap-5">
//             {/* Date */}
//             <div className="">
//               <button className="w-full flex items-center gap-1 px-4 py-3 border border-[#E8EDF2] bg-white rounded-lg shadow-sm">
//                 10-02-2021 <FiChevronDown />
//               </button>
//             </div>

//             {/* Status */}
//             <div className="">
//               <button className="w-[180px] flex items-center justify-between border border-[#E8EDF2] text-[14px] font-normal font-main text-[#7E7E8F] bg-white rounded-md  py-4 px-[15px]">
//                 Status <FiChevronDown />
//               </button>
//             </div>

//             {/* Filters Button */}
//             <button className="w-[90px] border border-[#E8EDF2] text-[14px] font-normal font-main text-[#7E7E8F] bg-white rounded-lg flex justify-center items-center py-4 gap-[5px] ">
//               <FiFilter /> Filters
//             </button>
//           </div>
//         </div>

//         <ReviewList users={users} />
//       </div>
//     </>
//   );
// };

// export default page;
"use client";
import ReviewList from "@/app/components/DashBoard/ClientList/ReviewList";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiChevronDown, FiFilter } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const page = () => {
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

export default page;
