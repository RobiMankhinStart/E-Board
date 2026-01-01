"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Page = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const products = [
    {
      id: 1,
      title: "Bose noise cancelling",
      price: 948.55,
      qty: 2,
      total: 630.44,
      img: "/prod1.png",
    },
    {
      id: 2,
      title: "Philips wireless headphone",
      price: 767.5,
      qty: 3,
      total: 767.5,
      img: "/prod2.png",
    },
    {
      id: 3,
      title: "Cumiitt smart watch",
      price: 396.84,
      qty: 1,
      total: 475.22,
      img: "/prod3.png",
    },
    {
      id: 4,
      title: "Google Pixel Buds",
      price: 778.35,
      qty: 4,
      total: 293.01,
      img: "/prod4.png",
    },
  ];

  const toggleMenu = (idx) => {
    setOpenMenu(openMenu === idx ? null : idx);
  };

  return (
    <div className="w-full p-4 md:p-6 bg-background min-h-screen rounded-xl">
      <h2 className="text-[24px] md:text-[28px] font-bold font-poppins">
        Payments
      </h2>

      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-1 pt-3 pb-6 text-sm">
        <div className="flex gap-1 items-center cursor-pointer hover:scale-110 duration-200">
          <GoHome />
          <Link href={"/dashboard"} className="text-[#7E7E8F] font-poppins">
            Home/Dashboard
          </Link>
        </div>
        <MdKeyboardDoubleArrowRight className="text-[#7E7E8F]" />
        <h3 className="text-[#7364DB] font-poppins cursor-pointer hover:scale-110 duration-200">
          Payments
        </h3>
      </div>

      {/* Top Info */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        {/* Left */}
        <div>
          <h1 className="text-lg font-semibold">Orders ID: #68543</h1>
          <p className="text-sm text-gray-500">Mon, Jan 28, 2022, 8:40AM</p>
          <p className="text-sm text-blue-500 font-medium mt-1">Pending</p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-wrap gap-3">
          <select className="border px-4 py-2 rounded-lg outline-none text-sm">
            <option>Change Status</option>
            <option>Pending</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>

          <button className="bg-bgsecond px-4 py-2 rounded-lg">Save</button>
          <button className="border px-4 py-2 rounded-lg">🖨</button>
        </div>
      </div>

      {/* TOP INFO CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Each card simplified to be naturally responsive */}
        <div className="bg-bgsecond p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Customer</h3>
          <p className="text-sm">Full name: Jane Cooper</p>
          <p className="text-sm text-secondary">
            E-mail: tim.jennings@example.com
          </p>
          <p className="text-sm">Phone: +099 856 245</p>
          <button className="mt-3 text-xs px-3 py-1 bg-[#EEF0FD] text-blue-600 rounded-lg">
            View Profile
          </button>
        </div>

        <div className="bg-bgsecond p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Order Info</h3>
          <p className="text-sm">Shipping: Next express</p>
          <p className="text-sm">Pay method: Paypal</p>
          <p className="text-sm">Status: Pending</p>
          <button className="mt-3 text-xs px-3 py-1 bg-[#EEF0FD] text-blue-600 rounded-lg">
            Download Info
          </button>
        </div>

        <div className="bg-bgsecond p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Deliver To</h3>
          <p className="text-sm text-secondary leading-5">
            Santa Ana, Illinois 85486 <br />
            2972 Westheimer Rd. <br />
            Block 9A
          </p>
          <button className="mt-3 text-xs px-3 py-1 bg-[#EEF0FD] text-blue-600 rounded-lg">
            View Profile
          </button>
        </div>

        <div className="bg-bgsecond p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Payment Info</h3>
          <p className="text-sm">💳 Master Card **** 6557</p>
          <p className="text-sm">Fox Market LLC</p>
          <p className="text-sm">Phone: +09985 6578 52</p>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-bg p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold mb-2 text-secondary">Notes</h3>
        <textarea
          placeholder="Type some note"
          className="w-full text-secondary border p-3 rounded-lg outline-none h-24"
        ></textarea>
      </div>

      {/* Products Title */}
      <h2 className="text-lg font-semibold mb-4">Products</h2>

      {/* HEADER — hidden on mobile */}
      <div className="hidden md:grid grid-cols-12 bg-bgsecond px-4 py-3 rounded-lg shadow text-sm font-medium">
        <div className="col-span-1">✓</div>
        <div className="col-span-5">Product Name</div>
        <div className="col-span-2 text-center">Price</div>
        <div className="col-span-2 text-center">Qty</div>
        <div className="col-span-2 text-right">Total</div>
      </div>

      {/* PRODUCT LIST */}
      <div className="mt-2 space-y-3">
        {products.map((p, idx) => (
          <div
            key={p.id}
            className="
              bg-bgsecond rounded-lg shadow p-4 
              grid grid-cols-12 gap-4 items-center
            "
          >
            {/* CHECKBOX */}
            <div className="col-span-1">
              <div className="w-5 h-5 border border-gray-400 rounded-sm"></div>
            </div>

            {/* PRODUCT INFO */}
            <div className="col-span-11 md:col-span-5 flex items-center">
              <Image
                src={p.img}
                width={48}
                height={48}
                alt={p.title}
                className="rounded-lg mr-3 object-cover"
              />
              <span className="font-medium text-sm md:text-base">
                {p.title}
              </span>
            </div>

            {/* PRICE */}
            <div className="col-span-6 md:col-span-2 text-center md:text-center text-sm">
              ${p.price.toFixed(2)}
            </div>

            {/* QTY */}
            <div className="col-span-3 md:col-span-2 text-center text-sm">
              {p.qty}
            </div>

            {/* TOTAL */}
            <div className="col-span-3 md:col-span-2 text-right text-sm font-medium">
              ${p.total.toFixed(2)}
            </div>

            {/* ACTIONS */}
            <div className="absolute right-4 top-4 md:static md:col-span-12 text-right">
              <button onClick={() => toggleMenu(idx)}>
                <FiMoreVertical size={20} />
              </button>

              {openMenu === idx && (
                <div className="absolute right-0 mt-2 w-32 bg-white border shadow-lg rounded-lg py-2 z-50">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    View
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Edit
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* TOTALS */}
      <div className="flex justify-end mt-6">
        <div className="bg-bg p-4 rounded-lg shadow w-full sm:w-64 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>$630.44</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (20%):</span>
            <span>$782.01</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>$293.01</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>310,000</span>
          </div>
          <p className="text-right text-blue-500 font-medium">Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
