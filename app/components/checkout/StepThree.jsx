import Image from "next/image";
import React from "react";

const StepThree = ({ step, cartProducts }) => {
  return (
    <div>
      {" "}
      {step === 3 && (
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h3 className="font-semibold">Payment</h3>
          {cartProducts.length === 0 && (
            <p className="text-gray-500">No item</p>
          )}
          {cartProducts.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-4 border-b border-gray-200"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.thumbnail}
                  width={90}
                  height={90}
                  alt={item.title}
                  className="rounded-md"
                />
                <p className="text-lg font-medium">{item.title}</p>
              </div>

              <p className="text-lg font-medium">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StepThree;
