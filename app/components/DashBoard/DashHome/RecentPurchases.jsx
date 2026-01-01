// // "use client";
// // import Image from "next/image";
// // import { BsThreeDotsVertical } from "react-icons/bs";
// // import avator from "../../../../public/AvatarReview.png";

// // const purchases = [
// //   {
// //     product: "MacBook Pro",
// //     orderId: "#25413",
// //     date: "Aug 5th, 2021",
// //     customer: { name: "Bessie Cooper", avatar: avator },
// //     status: "Delivered",
// //     amount: "$400.00",
// //   },
// //   {
// //     product: "iPhone 11 Pro",
// //     orderId: "#25413",
// //     date: "Aug 5th, 2021",
// //     customer: { name: "Annette Black", avatar: avator },
// //     status: "Pending",
// //     amount: "$200.00",
// //   },
// //   {
// //     product: "Oppo A20",
// //     orderId: "#25413",
// //     date: "Aug 5th, 2021",
// //     customer: { name: "Bessie Cooper", avatar: avator },
// //     status: "Delivered",
// //     amount: "$250.00",
// //   },
// // ];

// // const statusColor = {
// //   Delivered: "bg-green-500",
// //   Pending: "bg-orange-400",
// //   Canceled: "bg-red-500",
// // };

// // export default function RecentPurchases() {
// //   return (
// //     <div className="bg-white p-6 shadow rounded-xl mt-6">
// //       <h2 className="text-[18px] font-semibold mb-4">Recent Purchases</h2>

// //       <table className="w-full text-left">
// //         <thead>
// //           <tr className="text-gray-500 text-sm border-b">
// //             <th className="pb-3">Products</th>
// //             <th className="pb-3">Order ID</th>
// //             <th className="pb-3">Date</th>
// //             <th className="pb-3">Customer name</th>
// //             <th className="pb-3">Status</th>
// //             <th className="pb-3">Amount</th>
// //             <th className="pb-3">Actions</th>
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {purchases.map((p, i) => (
// //             <tr key={i} className="border-b last:border-none">
// //               <td className="py-4">{p.product}</td>
// //               <td>{p.orderId}</td>
// //               <td>{p.date}</td>
// //               <td className="flex items-center gap-2">
// //                 <Image
// //                   width={24}
// //                   height={24}
// //                   src={p.customer.avatar}
// //                   className=" rounded-full"
// //                   alt="customer"
// //                 />
// //                 {p.customer.name}
// //               </td>
// //               <td className="flex items-center gap-1">
// //                 <span
// //                   className={`w-2 h-2 rounded-full ${statusColor[p.status]}`}
// //                 ></span>
// //                 {p.status}
// //               </td>
// //               <td>{p.amount}</td>
// //               <td>
// //                 <BsThreeDotsVertical className="cursor-pointer" />
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }
// "use client";
// import Image from "next/image";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import avator from "../../../../public/AvatarReview.png";

// const purchases = [
//   {
//     product: "MacBook Pro",
//     orderId: "#25413",
//     date: "Aug 5th, 2021",
//     customer: { name: "Bessie Cooper", avatar: avator },
//     status: "Delivered",
//     amount: "$400.00",
//   },
//   {
//     product: "iPhone 11 Pro",
//     orderId: "#25413",
//     date: "Aug 5th, 2021",
//     customer: { name: "Annette Black", avatar: avator },
//     status: "Pending",
//     amount: "$200.00",
//   },
//   {
//     product: "Oppo A20",
//     orderId: "#25413",
//     date: "Aug 5th, 2021",
//     customer: { name: "Bessie Cooper", avatar: avator },
//     status: "Delivered",
//     amount: "$250.00",
//   },
// ];

// const statusColor = {
//   Delivered: "bg-green-500",
//   Pending: "bg-orange-400",
//   Canceled: "bg-red-500",
// };

// export default function RecentPurchases({ products }) {
//   return (
//     <div className=" w-[99%] bg-white border sm:max-w-[400px] md:max-w-[600px] lg:max-w-full overflow-x-scroll p-6 shadow rounded-xl mt-6 font-poppins!">
//       <h2 className="text-[18px] font-semibold mb-4">Recent Purchases</h2>

//       {/* HEADER ROW */}
//       <div className="flex justify-between text-[#9A9AAF] font-medium border-b border-[#E8EDF2] pb-3">
//         {/* <div className="w-1 border"></div> */}
//         <div className=" ml-10">Products</div>
//         <div className="">Order ID</div>
//         <div className="">Date</div>
//         <div className="">Customer name</div>
//         <div className="">Status</div>
//         <div className="">Amount</div>
//         <div className="">Actions</div>
//       </div>

//       {/* ROWS */}
//       {products?.slice(0, 5).map((p, i) => (
//         <div
//           key={i}
//           className="flex items-center border-b border-[#E8EDF2] py-4 last:border-none"
//         >
//           {/* Square Check Box */}
//           <div className="w-9  flex justify-center">
//             <div className="w-[18px] h-[18px] rounded border border-[#B0BAC9]"></div>
//           </div>

//           {/* Product */}
//           <div className="flex-1 min-w-[100px] border">{p?.title}</div>

//           {/* Order ID */}
//           <div className="min-w-10 border ml-7">{p?.id}</div>

//           {/* Date */}
//           <div className=" min-w-20 lg:max-w-28 border overflow-hidden">
//             {p?.meta.updatedAt}
//           </div>

//           {/* Customer */}
//           <div className="flex-1 border min-w-28  ml-14 flex items-center gap-2">
//             <Image
//               src={avator}
//               width={26}
//               height={26}
//               alt="avatar"
//               className="rounded-full"
//             />
//             {p?.reviews[0].reviewerName}
//           </div>

//           {/* Status */}
//           <div className="flex-1 min-w-20 border flex items-center  lg:ml-16 gap-2">
//             <span
//               className={`w-2 h-2 rounded-full border ${statusColor[p.status]}`}
//             ></span>
//             Active
//           </div>

//           {/* Amount */}
//           <div className="flex-1 ml-5">${p.price}</div>

//           {/* Actions */}
//           <div className="w-[30px]">
//             <BsThreeDotsVertical className="cursor-pointer" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import avator from "../../../../public/AvatarReview.png";

const statusColor = {
  Delivered: "bg-green-500",
  Pending: "bg-orange-400",
  Canceled: "bg-red-500",
};

export default function RecentPurchases({ products }) {
  return (
    <div className="w-full bg-white p-6  shadow rounded-xl mt-6 font-poppins">
      <h2 className="text-[18px] font-semibold mb-4">Recent Purchases</h2>

      {/* Table container */}
      <div className="hidden md:block overflow-x-auto">
        {/* HEADER */}
        <div className="grid grid-cols-7 text-[#9A9AAF] font-medium border-b pb-3 text-sm">
          <div></div>
          <div>Products</div>
          <div>Order ID</div>
          <div>Date</div>
          <div>Customer name</div>
          <div>Status</div>
          <div>Amount</div>
        </div>

        {/* ROWS */}
        {products?.slice(0, 5).map((p, i) => (
          <div
            key={i}
            className="grid grid-cols-7 items-center py-4 border-b last:border-none"
          >
            {/* Checkbox */}
            <div className="flex justify-center">
              <div className="w-[18px] h-[18px] rounded border border-[#B0BAC9]"></div>
            </div>

            {/* Product */}
            <div>{p?.title}</div>

            {/* Order ID */}
            <div className="">{p?.id}</div>

            {/* Date */}
            <div className=" md:mr-3 truncate">{p?.meta.updatedAt}</div>

            {/* Customer */}
            <div className="flex items-center gap-2">
              <Image
                src={avator}
                width={26}
                height={26}
                alt="avatar"
                className="rounded-full"
              />
              {p?.reviews[0].reviewerName}
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${statusColor[p.status]}`}
              ></span>
              Active
            </div>

            {/* Amount */}
            <div className="flex items-center justify-between">
              ${p.price}
              <BsThreeDotsVertical className="cursor-pointer text-gray-500" />
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE VIEW (cards) */}
      <div className="md:hidden flex flex-col w-[90%] gap-4">
        {products?.slice(0, 5).map((p, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 shadow-sm flex flex-col gap-3"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">{p.title}</h3>
              <BsThreeDotsVertical className="cursor-pointer text-gray-500" />
            </div>

            <div className="text-sm text-gray-600">
              <p>
                <span className="font-medium ">Order ID:</span> {p.id}
              </p>
              <p>
                <span className="font-medium">Date:</span> {p.meta.updatedAt}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src={avator}
                width={26}
                height={26}
                alt="avatar"
                className="rounded-full"
              />
              <span className="text-sm">{p.reviews[0].reviewerName}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span
                className={`w-2 h-2 rounded-full ${statusColor[p.status]}`}
              ></span>
              Active
            </div>

            <div className="text-[16px] font-semibold">${p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
