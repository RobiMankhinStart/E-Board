import { FaShoppingBag } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

export default function Top() {
  const cards = [
    {
      title: "Total sells",
      value: "$126.500",
      percentage: "34.7%",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Orders value",
      value: "$136.800",
      percentage: "22.8%",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Daily orders",
      value: "$25.200",
      percentage: "17.8%",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Daily Revenue",
      value: "$12.125",
      percentage: "23.9%",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  ];

  return (
    <div className="flex sm:max-w-[400px] md:max-w-[600px] lg:max-w-full flex-col items-center md:flex-row flex-wrap gap-4 py-4  ">
      {cards.map((card, i) => (
        <div
          key={i}
          className=" bg-white shadow-sm p-5 px-9 flex flex-col gap-3 rounded-2xl border w-[300px] border-[#E8EDF2]"
        >
          <div className="flex justify-between items-start">
            <p className="text-gray-500 text-sm font-medium">{card.title}</p>
            <FiMoreVertical className="text-gray-400" />
          </div>

          <div className="flex items-center gap-3 mt-1">
            <div className={`${card.iconBg} p-3 rounded-full`}>
              <FaShoppingBag className={`text-xl ${card.iconColor}`} />
            </div>
            <p className="text-xl font-bold">{card.value}</p>
            <p className="text-green-500 text-sm font-semibold flex items-center gap-1">
              ↑ {card.percentage}
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-1">Compared to Jan 2022</p>
        </div>
      ))}
    </div>
  );
}
