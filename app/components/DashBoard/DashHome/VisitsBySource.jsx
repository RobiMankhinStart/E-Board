"use client";

import { SlOptionsVertical } from "react-icons/sl";
import { RadialBarChart, RadialBar, Legend } from "recharts";

// #region Sample data
const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknown",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

// #endregion
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default function VisitsBySource() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <div className="mb-3 flex justify-between border-b border-[#E8EDF2] pb-2">
        <h2 className="font-semibold ">Visits by Source</h2>
        <button className="text-[#9A9AAF] cursor-pointer">
          <SlOptionsVertical />
        </button>
      </div>

      <div className="flex items-center justify-center">
        <RadialBarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "80vh",
            aspectRatio: 1.618,
          }}
          responsive
          cx="30%"
          barSize={14}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </div>

      <p className="text-center text-gray-600 text-sm mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
