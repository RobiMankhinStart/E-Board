import React from "react";

const StepIndicators = ({ step }) => {
  const steps = ["Address", "Shipping", "Payment"];

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
    <div className="flex justify-between mb-8">
      {steps.map((label, i) => {
        const active = step === i + 1;
        const completed = step > i + 1;
        return (
          <div key={i} className="flex flex-col items-center relative">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center
                ${
                  active
                    ? "bg-black text-white"
                    : completed
                    ? "bg-green-500 text-white"
                    : "bg-gray-300"
                }`}
            >
              {i + 1}
            </div>
            <p className="text-sm mt-1">{label}</p>

            {i < 2 && (
              <div
                className={`absolute top-4 left-10 w-20 h-1
                ${completed ? "bg-green-500" : "bg-gray-300"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicators;
