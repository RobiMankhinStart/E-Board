import React from "react";
import Image from "next/image";
import Link from "next/link";
import imgPlayStation from "../../../public/PlayStation.png";
import imgHeadPhone from "../../../public/hero__gnfk5g59t0qe_xlarge_2x 1.png";
import vision from "../../../public/hero__gnfk5g59t0qe_xlarge_2x 1.png";
import mac from "../../../public/hero__gnfk5g59t0qe_xlarge_2x 1.png";

const Advertisement = () => {
  return (
    <div className="w-full px-4 md:px-8 py-6">
      <div className="addRow flex flex-col lg:flex-row gap-10 justify-between">
        {/* LEFT SIDE */}
        <div className="left flex flex-col gap-8 flex-1">
          {/* PlayStation */}
          <div className="top flex flex-col sm:flex-row items-center gap-6">
            <Image
              width={350}
              height={300}
              alt="playstation"
              src={imgPlayStation}
              className="w-full sm:w-[300px] h-auto"
            />

            <div className="flex flex-col max-w-md">
              <h2 className="text-3xl sm:text-5xl font-medium font-inter">
                Playstation 5
              </h2>
              <p className="text-[#909090] text-sm font-medium mt-2">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          {/* Bottom Items */}
          <div className="bot flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">
            {/* Airpods */}
            <div className="flex gap-6 items-center">
              <Image src={imgHeadPhone} alt="head phone" width={120} />
              <div className="max-w-xs">
                <h3 className="font-light text-2xl sm:text-3xl">
                  Apple AirPods <span className="font-medium">Max</span>
                </h3>
                <p className="text-sm font-medium text-[#909090] mt-1">
                  Computational audio. Listen, it&apos;s powerful.
                </p>
              </div>
            </div>

            {/* Vision Pro */}
            <div className="flex gap-4 p-4 items-center bg-[#353535] rounded-lg w-full md:w-[350px]">
              <Image src={vision} alt="vision" width={120} height={150} />

              <div>
                <h2 className="text-2xl text-white font-light">
                  Apple Vision <span className="font-medium">Pro</span>
                </h2>
                <p className="text-sm font-medium text-[#909090] mt-1">
                  An immersive way to experience entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right flex flex-col sm:flex-row justify-between items-center p-6 bg-[#EDEDED] rounded-xl flex-1 gap-6">
          <div className="max-w-md">
            <h3 className="text-4xl sm:text-6xl font-thin">
              Macbook <span className="font-medium">Air</span>
            </h3>
            <p className="text-[#909090] text-sm font-medium my-4">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>

            <Link
              className="inline-block cursor-pointer hover:scale-110 duration-300 border rounded-md text-[16px] font-medium px-10 py-3 mt-2"
              href={"/products"}
            >
              Shop Now
            </Link>
          </div>

          <Image
            src={mac}
            alt="MacBook pro"
            width={260}
            className="w-[200px] sm:w-[260px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
