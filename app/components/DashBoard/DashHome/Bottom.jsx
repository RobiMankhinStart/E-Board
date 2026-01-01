import React from "react";
import MarketOverview from "./MarketOverview";
import VisitsBySource from "./VisitsBySource";
import TotalRevenue from "./TotalRevenue";

const Bottom = () => {
  return (
    <div className="mt-1 flex flex-wrap justify-between w-[99%]">
      <MarketOverview />
      <VisitsBySource />
      <TotalRevenue />
    </div>
  );
};

export default Bottom;
