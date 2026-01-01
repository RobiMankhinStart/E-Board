"use client";

import { SlOptionsVertical } from "react-icons/sl";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", direct: 40, social: 20 },
  { name: "Tue", direct: 60, social: 30 },
  { name: "Wed", direct: 50, social: 25 },
  { name: "Thu", direct: 70, social: 40 },
  { name: "Fri", direct: 100, social: 60 },
  { name: "Sat", direct: 60, social: 30 },
  { name: "Sun", direct: 40, social: 25 },
];

export default function TotalRevenue() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <div className="mb-3 flex justify-between border-b border-[#E8EDF2] pb-2">
        <h2 className="font-semibold">Total Revenue</h2>

        <button className="text-[#9A9AAF] cursor-pointer">
          <SlOptionsVertical />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={230}>
        <AreaChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />

          <Area
            dataKey="direct"
            stroke="#7364DB"
            fill="#7364DB"
            fillOpacity={0.3}
          />

          <Area
            dataKey="social"
            stroke="#FF5F9E"
            fill="#FF5F9E"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>

      <p className="text-gray-600 text-sm mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
