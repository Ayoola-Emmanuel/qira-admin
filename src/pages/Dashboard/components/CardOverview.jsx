import React from "react";
import { FaRegBookmark, FaRegEye, FaRegUser } from "react-icons/fa";

const cardInfo = [
  {
    icon: <FaRegBookmark />,
    title: "Payment",
    value: "₦40,000",
  },
  {
    icon: <FaRegBookmark />,
    title: "Payout",
    value: "₦40,000",
  },
  {
    icon: <FaRegUser />,
    title: "All Properties",
    value: 20,
  },
  {
    icon: <FaRegEye />,
    title: "Landlord",
    value: 20,
  },
];

const CardOverview = () => {
  return (
    <div className="bg-white rounded-xl p-8 px-12 card-shadow">
      <div className="flex justify-between">
        {cardInfo.map((item, index) => (
          <div className="basis-2/12" key={index}>
            <div className="flex items-center gap-3.5">
              <div className="bg-primary w-12 h-12 text-xl rounded-full text-white flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="mb-0.5">{item.title}</p>
                <h6 className="font-semibold text-[#080746] text-lg">
                  {item.value}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default CardOverview;
