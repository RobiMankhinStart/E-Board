import React from "react";

const Footer = () => {
  return (
    <div className="border-t mt-5 px-[23px] border-[#E8EDF2] py-7 text-[#9A9AAF] flex lg:flex-row flex-col items-center justify-between">
      <div className="flex lg:flex-row flex-col items-center gap-2">
        <p>
          © 2022 - <span className="text-[#7364DB]">Frox</span> Dashboard
        </p>
        <p className="flex items-center">
          <span className="size-1 mr-2 bg-[#7364DB] rounded-full"></span> Made
          by AliThemes
        </p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-[#9A9AAF] ">About</p>
        <p className="text-[#9A9AAF] ">Careers</p>
        <p className="text-[#9A9AAF] ">Policy</p>
        <p className="text-[#9A9AAF] ">Contact</p>
      </div>
    </div>
  );
};

export default Footer;
