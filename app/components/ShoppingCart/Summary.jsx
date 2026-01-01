import Link from "next/link";
import React from "react";

const Summary = ({ SubTotal, Total, count }) => {
  return (
    <div className="w-full">
      <div className="summary bg-white py-8 px-6 sm:px-10 md:px-14 border border-gray-200 rounded-md shadow-sm">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Order Summary
        </h2>

        {/* Discount code */}
        <div className="flex flex-col mb-6 w-full max-w-md">
          <label className="text-gray-600 text-sm mb-2" htmlFor="promoCode">
            Discount code / Promo code
          </label>
          <input
            className="text-gray-600 text-sm p-3 border rounded-md border-gray-300 w-full"
            type="text"
            id="promoCode"
            placeholder="Code"
          />
        </div>

        {/* Bonus card */}
        <div className="flex flex-col relative mb-6 w-full max-w-md">
          <label className="text-gray-600 text-sm mb-2" htmlFor="bonusCard">
            Your bonus card number
          </label>
          <input
            className="text-gray-600 text-sm p-3 border rounded-md border-gray-300 w-full pr-20"
            type="text"
            id="bonusCard"
            placeholder="Enter Card Number"
          />
          <button className="absolute right-2 top-9 px-3 py-1 text-sm font-medium border rounded-md hover:bg-gray-100">
            Apply
          </button>
        </div>

        {/* Price details */}
        <div className="flex flex-col gap-2 max-w-md">
          <div className="flex items-center justify-between text-base font-medium">
            <h3>Subtotal</h3>
            <h3>${SubTotal}</h3>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <h3>Estimated Tax</h3>
            <h3>$29</h3>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <h3>Estimated Shipping & Handling</h3>
            <h3>$23</h3>
          </div>
          <div className="flex items-center justify-between text-base font-medium mt-2">
            <h3>Total</h3>
            <h3>${Total}</h3>
          </div>
        </div>

        {/* Checkout Button */}
        <Link
          href={count === 0 ? "#" : "checkout"}
          onClick={(e) => count === 0 && e.preventDefault()}
          className={` ${
            count === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800 text-white"
          } bg-black text-white text-lg font-medium flex items-center justify-center w-full max-w-md h-14 mt-6 rounded-md cursor-pointer hover:bg-gray-800`}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Summary;
