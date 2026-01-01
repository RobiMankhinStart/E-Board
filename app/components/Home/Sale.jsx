import Image from "next/image";
import React from "react";
import banner2 from "../../../public/Banner2.png";
import Link from "next/link";

const Sale = () => {
  return (
    <div className="relative w-full border">
      {/* Image */}
      <div className="relative w-full h-[260px] sm:h-[350px] md:h-[480px] lg:h-[550px]">
        <Image
          src={banner2}
          alt="banner"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-white font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Big Summer <span className="font-medium">Sale</span>
        </h2>

        <p className="text-[#e9e9e9] mt-3 mb-8 text-sm sm:text-base max-w-[400px]">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>

        <Link
          href="/products"
          className="hover:scale-110 duration-300 border border-white text-white px-10 py-3 rounded-md text-sm sm:text-base font-medium"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Sale;
