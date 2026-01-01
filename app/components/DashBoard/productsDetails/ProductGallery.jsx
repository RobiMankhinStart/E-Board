import Image from "next/image";
import React from "react";
import { FiImage } from "react-icons/fi";
import watch from "../../../../public/watchDetails.png";

export default function ProductGallery() {
  return (
    <div className="w-full">
      {/* IMAGE PREVIEW */}
      <div className="hover:shadow-md my-12 border border-[#E8EDF2] rounded-lg bg-white flex items-center justify-center overflow-hidden">
        <Image
          height={400}
          width={400}
          src={watch}
          alt="product"
          className="rounded-xl w-full max-w-md object-cover"
        />
      </div>

      <h2 className="text-[16px] font-medium">Product Gallery</h2>

      <div className="w-full border-2 border-dashed border-gray-300 rounded-xl p-8 mt-2.5 flex flex-col items-center justify-center bg-white hover:border-purple-400 transition">
        <FiImage className="text-3xl text-purple-500 mb-3" />

        <p className="text-gray-600 text-sm text-center">
          Drop your image here or{" "}
          <span className="text-purple-600 cursor-pointer font-semibold">
            browse
          </span>
        </p>

        <p className="text-gray-400 text-xs mt-1">
          JPG, PNG and GIF files are allowed
        </p>
      </div>
    </div>
  );
}
