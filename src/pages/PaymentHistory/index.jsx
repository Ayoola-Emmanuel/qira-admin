import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import DashboardLayout from "../../components/DashboardLayout";

const tableInfo = [
  {
    date: "26/03/2024",
    amount: "₦15,000",
    time: "4:20 PM",
    landlord: "Tolu Araba",
    paymentReference: "##REF-124354",
    status: "paid",
  },
  {
    date: "26/03/2024",
    amount: "₦15,000",
    time: "4:20 PM",
    landlord: "Tolu Araba",
    paymentReference: "##REF-124354",
    status: "paid",
  },
  {
    date: "26/03/2024",
    amount: "₦15,000",
    time: "4:20 PM",
    landlord: "Tolu Araba",
    paymentReference: "##REF-124354",
    status: "paid",
  },
  {
    date: "26/03/2024",
    amount: "₦15,000",
    time: "4:20 PM",
    landlord: "Tolu Araba",
    paymentReference: "##REF-124354",
    status: "paid",
  },
  {
    date: "26/03/2024",
    amount: "₦15,000",
    time: "4:20 PM",
    landlord: "Tolu Araba",
    paymentReference: "##REF-124354",
    status: "paid",
  },
  {
    date: "26/03/2024",
    amount: "₦15,000",
    time: "4:20 PM",
    landlord: "Tolu Araba",
    paymentReference: "##REF-124354",
    status: "paid",
  },
  {
    date: "26/03/2024",
    amount: "₦15,000",
    time: "4:20 PM",
    landlord: "Tolu Araba",
    paymentReference: "##REF-124354",
    status: "paid",
  },
  {
    date: "26/03/2024",
    amount: "₦15,000",
    time: "4:20 PM",
    landlord: "Tolu Araba",
    paymentReference: "##REF-124354",
    status: "paid",
  },
  {
    date: "26/03/2024",
    amount: "₦15,000",
    time: "4:20 PM",
    landlord: "Tolu Araba",
    paymentReference: "##REF-124354",
    status: "paid",
  },
  {
    date: "26/03/2024",
    amount: "₦15,000",
    time: "4:20 PM",
    landlord: "Tolu Araba",
    paymentReference: "##REF-124354",
    status: "paid",
  },
];

const PaymentHistory = () => {
  return (
    <DashboardLayout header="Payment History">
      {/* <div>
        <h6>&nbsp;</h6>
      </div> */}
      <div className="bg-white card-shadow w-full rounded-md">
        <div className="tab-content">
          <table className="w-full table-auto text-sm text-left">
            <thead className=" bg-[#F9F9F9] px-3">
              <tr>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Payment Reference
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Amount
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">Date</h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">Time</h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Paid to (Landlord)
                  </h6>
                </th>

                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Status
                  </h6>
                </th>
              </tr>
            </thead>
            {tableInfo.map((event, idx) => {
              return (
                <tr key={idx} className="border-b border-[#E4E7EC]">
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.paymentReference}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.amount}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.date}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.time}</h6>
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.landlord}</h6>
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <button
                      className={`${
                        event.status === "pending"
                          ? "bg-[#FFEAD4]"
                          : "bg-[#ECFDF3]"
                      } px-3.5 py-0.5 rounded-full flex gap-2 items-center`}
                    >
                      <span
                        className={`${
                          event.status === "pending"
                            ? "bg-[#FF7F51]"
                            : "bg-[#12B76A]"
                        } inline-block w-3 h-3 rounded-full`}
                      ></span>
                      <span
                        className={`${
                          event.status === "pending"
                            ? "text-[#FF7F51]"
                            : "text-[#12B76A]"
                        } capitalize`}
                      >
                        {event.status}
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <Pagination />
      </div>
    </DashboardLayout>
  );
};

export default PaymentHistory;
