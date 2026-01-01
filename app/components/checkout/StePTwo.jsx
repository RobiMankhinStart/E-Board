import React from "react";
import { GrRadialSelected } from "react-icons/gr";

const StePTwo = () => {
  return (
    <div>
      {" "}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4">Shipping Options</h3>
        <div className="flex flex-col justify-center gap-4">
          <div className="border border-[#D1D1D8] rounded-lg px-6 flex gap-2 items-center py-6 text-[16px]">
            <GrRadialSelected /> <h3>Free</h3> <p>Regular shipment</p>
          </div>
          <div className="border border-[#D1D1D8] text-[#A2A3B1] rounded-lg px-6 flex gap-2 items-center py-6 text-[16px]">
            <GrRadialSelected /> <h3>$5.60</h3>{" "}
            <p>Get your delivery as soon as possible</p>
          </div>
          <div className="border border-[#D1D1D8] text-[#A2A3B1] rounded-lg px-6 flex gap-2 items-center py-6 text-[16px]">
            <GrRadialSelected /> <h3>Schedule</h3>{" "}
            <p>Pick a date when you want your delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StePTwo;
