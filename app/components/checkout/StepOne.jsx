import React, { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

const StepOne = ({ step }) => {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const addresses = [
    {
      id: 1,
      label: "2118 Thornridge",
      type: "HOME",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      phone: "(209) 555-0104",
    },
    {
      id: 2,
      label: "Headoffice",
      type: "OFFICE",
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      phone: "(704) 555-0127",
    },
  ];
  return (
    <div>
      {" "}
      {step === 1 && (
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h3 className="font-semibold">Select Address</h3>

          {addresses.map((addr) => {
            const active = selectedAddress === addr.id;
            return (
              <div
                key={addr.id}
                onClick={() => setSelectedAddress(addr.id)}
                className={`p-4 border rounded-md cursor-pointer flex justify-between
                    ${active ? "border-black bg-gray-50" : "border-gray-200"}`}
              >
                <div>
                  <p className="font-medium flex items-center gap-2">
                    {addr.label}
                    <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded">
                      {addr.type}
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm">{addr.address}</p>
                  <p className="text-gray-500 text-sm">{addr.phone}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <FiEdit
                    className="text-gray-500 hover:text-black"
                    size={18}
                  />
                  <FiX className="text-gray-500 hover:text-red-500" size={18} />
                </div>
              </div>
            );
          })}

          <button className="text-black font-medium mt-3">
            + Add New Address
          </button>
        </div>
      )}
    </div>
  );
};

export default StepOne;
