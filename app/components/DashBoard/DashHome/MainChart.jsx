// "use client";
// import { SlOptionsVertical } from "react-icons/sl";

// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";
// import { curveCardinal } from "d3-shape";

// const data = [
//   { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
//   { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
//   { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
//   { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
//   { name: "Jun", uv: 1890, pv: 4800, amt: 2181 },
//   { name: "Jul", uv: 2390, pv: 3800, amt: 2500 },
//   { name: "Aug", uv: 3490, pv: 4300, amt: 2100 },
//   { name: "Sep", uv: 3190, pv: 4100, amt: 1700 },
//   { name: "Oct", uv: 3890, pv: 4000, amt: 1900 },
//   { name: "Nov", uv: 4090, pv: 3000, amt: 2100 },
//   { name: "Dec", uv: 4290, pv: 2700, amt: 2000 },
// ];

// const cardinal = curveCardinal.tension(0.2);

// export default function MainChart() {
//   return (
//     <div className=" py-4.5 px-6 rounded-xl border bg-white border-[#E8EDF2]">
//       {/* heading part  */}
//       <div className="flex items-center justify-between pb-5 pt-2">
//         <h2 className="text-[16px] font-poppins font-semibold">
//           Sales Performance
//         </h2>
//         <div className="flex gap-[67px] items-center">
//           <p className="text-[#9A9AAF] font-poppins">Today’s</p>
//           <div className="text-[#7364DB] font-poppins flex items-center gap-6">
//             <p>Monthly</p>
//             <button className="text-[#9A9AAF]">
//               <SlOptionsVertical />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-6 my-4 items-center">
//         <div className=" flex items-center  gap-1.5">
//           <p className="size-4  rounded-sm bg-[#979797] "></p>
//           <p className="text-[#7E7E8F] mt-1">Completed</p>
//         </div>
//         <div className=" flex items-center  gap-1.5">
//           <p className="size-4  rounded-sm bg-[#F3BCFD] "></p>
//           <p className="text-[#7E7E8F] mt-1">Completed</p>
//         </div>
//         <div className=" flex items-center  gap-1.5">
//           <p className="size-4  rounded-sm bg-[#80B7FB] "></p>
//           <p className="text-[#7E7E8F] mt-1">Completed</p>
//         </div>
//         <div className=" flex items-center  gap-1.5">
//           <p className="size-4  rounded-sm bg-[#B9A2FB] "></p>
//           <p className="text-[#7E7E8F] mt-1">Completed</p>
//         </div>
//       </div>
//       {/* cart body part  */}

//       <div className="w-full max-w-[950px]  h-[400px]">
//         <AreaChart
//           width={850}
//           height={350}
//           data={data}
//           margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="uv"
//             stroke="#8884d8"
//             fill="#8884d8"
//             fillOpacity={0.3}
//           />

//           <Area
//             type={cardinal}
//             dataKey="uv"
//             stroke="#82ca9d"
//             fill="#82ca9d"
//             fillOpacity={0.3}
//           />
//         </AreaChart>
//       </div>
//     </div>
//   );
// }
"use client";
import { SlOptionsVertical } from "react-icons/sl";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { curveCardinal } from "d3-shape";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Jun", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jul", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Aug", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Sep", uv: 3190, pv: 4100, amt: 1700 },
  { name: "Oct", uv: 3890, pv: 4000, amt: 1900 },
  { name: "Nov", uv: 4090, pv: 3000, amt: 2100 },
  { name: "Dec", uv: 4290, pv: 2700, amt: 2000 },
];

const cardinal = curveCardinal.tension(0.2);

export default function MainChart() {
  return (
    <div className="py-4.5 px-6 rounded-xl border bg-white border-[#E8EDF2] sm:max-w-[400px] md:max-w-[600px] lg:w-full">
      {/* heading part */}
      <div className="flex items-center justify-between pb-5 pt-2 flex-wrap gap-3">
        <h2 className="text-[16px] font-poppins font-semibold">
          Sales Performance
        </h2>

        {/* Right side */}
        <div className="flex gap-6 items-center flex-wrap">
          <p className="text-[#9A9AAF] font-poppins">Today’s</p>
          <div className="text-[#7364DB] font-poppins flex items-center gap-4">
            <p>Monthly</p>
            <button className="text-[#9A9AAF]">
              <SlOptionsVertical />
            </button>
          </div>
        </div>
      </div>

      {/* Legend section */}
      <div className="flex gap-2 lg:gap-4 my-4 items-center flex-wrap">
        <div className="flex items-center gap-1.5">
          <p className="size-4 rounded-sm bg-[#979797]"></p>
          <p className="text-[#7E7E8F] text-[12px] lg:text-base mt-1">
            Completed
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <p className="size-4 rounded-sm bg-[#F3BCFD]"></p>
          <p className="text-[#7E7E8F] text-[12px] lg:text-base mt-1">
            Completed
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <p className="size-4 rounded-sm bg-[#80B7FB]"></p>
          <p className="text-[#7E7E8F] text-[12px] lg:text-base mt-1">
            Completed
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <p className="size-4 rounded-sm bg-[#B9A2FB]"></p>
          <p className="text-[#7E7E8F] text-[12px] lg:text-base mt-1">
            Completed
          </p>
        </div>
      </div>

      {/* chart body */}
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.3}
            />

            <Area
              type={cardinal}
              dataKey="uv"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
