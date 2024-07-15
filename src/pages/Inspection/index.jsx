import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import List from "./components/List";
import Action from "./components/Action";
import DashboardLayout from "../../components/DashboardLayout";

const tableInfo = [
  {
    inspectionDate: "07/03/2024",
    amount: "₦2,500",
    commission: "N850",
    phone: "09012059519",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "pending",
  },
  {
    inspectionDate: "07/03/2024",
    amount: "₦2,500",
    commission: "N850",
    phone: "09012059519",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "pending",
  },
  {
    inspectionDate: "07/03/2024",
    amount: "₦2,500",
    commission: "N850",
    phone: "09012059519",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "pending",
  },
  {
    inspectionDate: "07/03/2024",
    amount: "₦2,500",
    commission: "N850",
    phone: "09012059519",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "completed",
  },
  {
    inspectionDate: "07/03/2024",
    amount: "₦2,500",
    commission: "N850",
    phone: "09012059519",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "completed",
  },
  {
    inspectionDate: "07/03/2024",
    amount: "₦2,500",
    commission: "N850",
    phone: "09012059519",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "completed",
  },
  {
    inspectionDate: "07/03/2024",
    amount: "₦2,500",
    commission: "N850",
    phone: "09012059519",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "completed",
  },
  {
    inspectionDate: "07/03/2024",
    amount: "₦2,500",
    commission: "N850",
    phone: "09012059519",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "pending",
  },
  {
    inspectionDate: "07/03/2024",
    amount: "₦2,500",
    commission: "N850",
    phone: "09012059519",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "completed",
  },
  {
    inspectionDate: "07/03/2024",
    amount: "₦2,500",
    commission: "N850",
    phone: "09012059519",
    customer: "Allen Araba",
    apartment: "Marion Court, 2 Bedroom flat",
    status: "completed",
  },
];

const Inspection = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

   const handleDropdownToggle = (idx) => {
     setOpenDropdown((prevState) => (prevState === idx ? null : idx));
   };
  return (
    <DashboardLayout header="Inspection">
      <List />
      <div>
        <h6>&nbsp;</h6>
      </div>
      <div className="bg-white card-shadow w-full rounded-md">
        <div className="tab-content">
          <table className="w-full table-auto text-sm text-left">
            <thead className=" bg-[#F9F9F9] px-3">
              <tr>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Amount
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Inspection Date
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Customer
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Phone
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Apartment
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Status
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Action
                  </h6>
                </th>
              </tr>
            </thead>
            {tableInfo.map((event, idx) => {
              return (
                <tr key={idx} className="border-b border-[#E4E7EC]">
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.amount}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.inspectionDate}</h6>
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.customer}</h6>
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.phone}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.apartment}</h6>
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
                  <Action
                    idx={idx}
                    openDropdown={openDropdown === idx}
                    handleDropdownToggle={handleDropdownToggle}
                  />
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

export default Inspection;
