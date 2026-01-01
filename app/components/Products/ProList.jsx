"use client";
import React from "react";
import ProCard from "../common/ProCard";

const ProList = ({ products }) => {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      {products?.map((item) => (
        <ProCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProList;
