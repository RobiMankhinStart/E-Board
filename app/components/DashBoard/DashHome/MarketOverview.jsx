"use client";

import { SlOptionsVertical } from "react-icons/sl";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", uv: 30 },
  { name: "Tue", uv: 60 },
  { name: "Wed", uv: 40 },
  { name: "Thu", uv: 80 },
  { name: "Fri", uv: 100 },
  { name: "Sat", uv: 40 },
  { name: "Sun", uv: 30 },
];

export default function MarketOverview() {
  return (
    <div className="bg-white lg:w-[400px] md:w-[50%] sm:min-w-[390px]  p-6 rounded-xl shadow mt-6">
      <div className="mb-3 flex justify-between border-b border-[#E8EDF2] pb-2">
        <h2 className="font-semibold ">Market Overview</h2>
        <button className="text-[#9A9AAF] cursor-pointer">
          <SlOptionsVertical />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <Bar dataKey="uv" fill="#7364DB" radius={[10, 10, 10, 10]} />
          <XAxis dataKey="name" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
