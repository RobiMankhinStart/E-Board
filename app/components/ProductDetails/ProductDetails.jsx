"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const images = Array.isArray(product?.images) ? product.images : [];
  const [currantImage, setCurrantImage] = useState(images[0] || "");
  if (!product || images.length === 0) {
    return (
      <div className="bg-gray-100 rounded-md p-4 text-gray-500">
        No image found
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={`productImage-${index}`}
            width={150}
            height={150}
            className={`cursor-pointer p-2  bg-gray-100 rounded-md w-28 h-28 object-contain opacity-80 hover:opacity-100 duration-200 ${
              currantImage === item
                ? "border-2 border-gray-200 opacity-100"
                : ""
            }`}
            onClick={() => setCurrantImage(item)}
          />
        ))}
      </div>
      <div className="bg-gray-100 rounded-md w-full h-300 sm:h-[550px] md:h-[550px] border-gray-200 shadow-sm flex items-center justify-center cursor-pointer">
        {images[0] ? (
          <Image
            src={currantImage}
            alt="productImage"
            width={400}
            height={420}
            className="object-contain w-full h-full "
          />
        ) : (
          <p className="text-gray-500 text-sm">No image found</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
