import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Pagination from "../../components/Pagination";
import DropDown from "./components/DropDown";

const customerData = [
  {
    name: "Susan Allen",
    phone: "09012059519",
    property: "Araba Property",
    amount: "₦15,000",
    payday: "17/11/24",
    dueday: "17/11/25",
  },
  {
    name: "Ogidi Taiwo",
    phone: "09012059519",
    property: "Araba Property",
    amount: "₦15,000",
    payday: "17/11/24",
    dueday: "17/11/26",
  },
  {
    name: "Tolu Araba",
    phone: "09012059519",
    property: "Araba Property",
    amount: "₦15,000",
    payday: "17/11/24",
    dueday: "17/11/25",
  },
  {
    name: "Tolu Araba",
    phone: "09012059519",
    property: "Araba Property",
    amount: "₦15,000",
    payday: "17/11/24",
    dueday: "17/11/23",
  },
  {
    name: "Tolu Araba",
    phone: "09012059519",
    property: "Araba Property",
    amount: "₦15,000",
    payday: "17/11/24",
    dueday: "17/11/25",
  },
  {
    name: "Tolu Araba",
    phone: "09012059519",
    property: "Araba Property",
    amount: "₦15,000",
    payday: "17/11/24",
    dueday: "17/11/25",
  },
  {
    name: "Tolu Araba",
    phone: "09012059519",
    property: "Araba Property",
    amount: "₦15,000",
    payday: "17/11/24",
    dueday: "17/11/25",
  },
  {
    name: "Tolu Araba",
    phone: "09012059519",
    property: "Araba Property",
    amount: "₦15,000",
    payday: "17/11/24",
    dueday: "17/11/25",
  },
  {
    name: "Tolu Araba",
    phone: "09012059519",
    property: "Araba Property",
    amount: "₦15,000",
    payday: "17/11/24",
    dueday: "17/11/25",
  },
  {
    name: "Tolu Araba",
    phone: "09012059519",
    property: "Araba Property",
    amount: "₦15,000",
    payday: "17/11/24",
    dueday: "17/11/25",
  },
];


const Customers = () => {

  return (
    <DashboardLayout header="Customers">
      <DropDown />
      <div className="bg-white card-shadow w-full rounded-md">
        <div className="tab-content">
          <table className="w-full table-auto text-sm text-left">
            <thead className=" bg-[#F9F9F9] px-3">
              <tr>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Customer Name
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Phone
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Property Name
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Amount
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Payment Date
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Due Date
                  </h6>
                </th>
              </tr>
            </thead>
            {customerData.map((event, idx) => {
              return (
                <tr key={idx} className="border-b border-[#E4E7EC]">
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.name}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.phone}</h6>
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.property}</h6>
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.amount}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.payday}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.dueday}</h6>
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

export default Customers;
