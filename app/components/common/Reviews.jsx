// import Image from "next/image";
// import React from "react";
// import { FaStar } from "react-icons/fa";
// import UserPic from "../../../public/UserPic.png";

// export default function Reviews({ product }) {
//   const ratingBars = [
//     { label: "Excellent", value: 100 },
//     { label: "Good", value: 11 },
//     { label: "Average", value: 3 },
//     { label: "Below Average", value: 8 },
//     { label: "Poor", value: 1 },
//   ];

//   // const reviews = Array.isArray(product) ? product : [];
//   const reviews = Array.isArray(product?.reviews) ? product.reviews : [];

//   return (
//     <div className=" p-6">
//       {/* Title */}
//       <h2 className="text-2xl font-semibold mb-6">Reviews</h2>
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row gap-10 items-start">
//         {/* Left Rating Box */}
//         <div className="w-full md:w-1/4 bg-white shadow rounded-2xl p-6 text-center">
//           <h1 className="text-[56px] font-medium">{product?.rating}</h1>
//           <p className="text-gray-500 text-sm mt-2">
//             of {reviews.length} reviews
//           </p>

//           <div className="flex justify-center mt-3 text-yellow-400 text-xl">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} />
//             ))}
//           </div>
//         </div>

//         {/* Right Rating Bars */}
//         <div className="w-full md:w-3/4 space-y-3">
//           {ratingBars.map((item, i) => (
//             <div key={i} className="flex items-center gap-4">
//               <p className="w-28 text-gray-700 text-[18px] font-medium">
//                 {item.label}
//               </p>

//               <div className="w-full bg-gray-200 h-2 rounded-full">
//                 <div
//                   className="bg-yellow-400 h-2 rounded-full"
//                   style={{ width: `${item.value}%` }}
//                 ></div>
//               </div>

//               <p className="w-10 text-gray-600 text-sm">{item.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Comment Box */}
//       <input
//         type="text"
//         placeholder="Leave Comment"
//         className="w-full outline-none border border-[#cecece] mt-10 p-3 rounded-xl shadow-sm"
//       />
//       {/* User Review 1 */}
//       {reviews[0] && (
//         <div className="mt-10 flex gap-4 p-5 bg-[#fafafa] shadow rounded-2xl">
//           <div>
//             <Image
//               width={48}
//               height={48}
//               src={UserPic}
//               alt="avatar"
//               className=" object-cover"
//             />
//           </div>
//           <div className="w-full">
//             <div className="flex justify-between items-center">
//               <p className="font-semibold">{reviews[0]?.reviewerName}</p>
//               <p className="text-gray-400 text-sm">
//                 {reviews[0]?.date.split("T")[0] || []}
//               </p>
//             </div>

//             <div className="flex text-yellow-400 mt-1">
//               {[...Array(4)].map((_, i) => (
//                 <FaStar key={i} />
//               ))}
//               <FaStar className="text-gray-300" />
//             </div>

//             <p className="text-sm text-[#7E7E7E] mt-2 leading-relaxed">
//               {reviews[0]?.comment}
//             </p>
//           </div>
//         </div>
//       )}
//       {/* User Review 2 */}
//       {reviews[1] && (
//         <div className="mt-10 flex gap-4 p-5 bg-[#fafafa] shadow rounded-2xl">
//           <div>
//             <Image
//               width={48}
//               height={48}
//               src={UserPic}
//               alt="avatar"
//               className=" object-cover"
//             />
//           </div>
//           <div className="w-full">
//             <div className="flex justify-between items-center">
//               <p className="font-semibold">
//                 {reviews[1]?.reviewerName || "Anonymous"}
//               </p>
//               <p className="text-gray-400 text-sm">
//                 {reviews[0]?.date.split("T")[1]?.slice(0, 5) || []}
//               </p>
//             </div>

//             <div className="flex text-yellow-400 mt-1">
//               {[...Array(4)].map((_, i) => (
//                 <FaStar key={i} />
//               ))}
//               <FaStar className="text-gray-300" />
//             </div>

//             <p className="text-sm text-[#7E7E7E] mt-2 leading-relaxed">
//               {reviews[1]?.comment}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import UserPic from "../../../public/UserPic.png";

export default function Reviews({ product }) {
  const ratingBars = [
    { label: "Excellent", value: 100 },
    { label: "Good", value: 11 },
    { label: "Average", value: 3 },
    { label: "Below Average", value: 8 },
    { label: "Poor", value: 1 },
  ];

  const reviews = Array.isArray(product?.reviews) ? product.reviews : [];

  return (
    <div className="p-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">Reviews</h2>

      {/* Rating Overview */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Box */}
        <div className="w-full md:w-1/4 bg-white shadow-lg rounded-2xl p-6 text-center">
          <h1 className="text-[48px] font-bold">{product?.rating}</h1>
          <p className="text-gray-500 text-sm mt-1">
            from {reviews.length} reviews
          </p>

          {/* Stars */}
          <div className="flex justify-center mt-3 text-yellow-400 text-xl">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        {/* Right Bars */}
        <div className="w-full md:w-3/4 space-y-4">
          {ratingBars.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <p className="w-28 text-gray-700 text-[16px] font-medium">
                {item.label}
              </p>

              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                />
              </div>

              <p className="w-10 text-gray-600 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comment Input */}
      <input
        type="text"
        placeholder="Leave Comment"
        className="w-full outline-none border border-[#cecece] mt-10 p-3 rounded-xl shadow-sm"
      />

      {/* User Reviews */}
      <div className="mt-10 space-y-6">
        {reviews.length === 0 && (
          <p className="text-gray-500">No reviews yet.</p>
        )}

        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex gap-4 p-5 bg-[#fafafa] shadow rounded-2xl"
          >
            <div className="">
              <Image
                width={48}
                // height={48}
                src={UserPic}
                alt="avatar"
                className="rounded-full object-cover"
              />
            </div>

            <div className="w-full">
              {/* Top section */}
              <div className="flex justify-between items-center">
                <p className="font-semibold">
                  {review.reviewerName || "Anonymous"}
                </p>

                <p className="text-gray-400 text-sm">
                  {review.date ? review.date.split("T")[0] : ""}
                </p>
              </div>

              {/* Star Rating */}
              <div className="flex text-yellow-400 mt-1">
                {[...Array(review.rating || 4)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {[...Array(5 - (review.rating || 4))].map((_, i) => (
                  <FaStar key={i} className="text-gray-300" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm text-[#7E7E7E] mt-2 leading-relaxed">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
