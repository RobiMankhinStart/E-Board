import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#211c24]">
      <div className="container">
        <div
          className="
            bg-contain bg-no-repeat bg-right
            bg-[url('/BannnerIphoneImg.png')]

            /* spacing */
            py-20 px-4 
            sm:py-24 sm:px-10 
            md:py-32 md:pl-20 
            lg:py-[188px] lg:pl-40
          "
        >
          {/* Pro.Beyond */}
          <p className="text-[#7a777c] font-inter font-semibold text-[20px] sm:text-[22px] md:text-[25px]">
            Pro.Beyond.
          </p>

          {/* Title */}
          <h1
            className="
              m-0! my-6 font-thin text-white font-inter
              text-[40px] 
              sm:text-[56px] 
              md:text-[72px] 
              lg:text-[96px]
            "
          >
            IPhone 14 <span className="font-semibold">Pro</span>
          </h1>

          {/* Subtitle */}
          <p
            className="
              mb-6 text-[#909090] font-inter font-medium
              text-[14px] 
              sm:text-[16px] 
              md:text-[18px]
              max-w-md
            "
          >
            Created to change everything for the better. For everyone
          </p>

          {/* Button - untouched */}
          <Link
            href={"/products"}
            className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
          >
            <span className="relative z-20">Shop Now</span>

            <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
