import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import List from "./components/List";
import Action from "./components/Action";
import DashboardLayout from "../../components/DashboardLayout";

const tableInfo = [
  {
    email: "allensmyllen@gmail.com",
    property: "Araba Property",
    phone: "09012059519",
    name: "Tolu Araba",
    status: "pending",
  },
  {
    email: "allensmyllen@gmail.com",
    property: "Araba Property",
    phone: "09012059519",
    name: "Tolu Araba",
    status: "pending",
  },
  {
    email: "allensmyllen@gmail.com",
    property: "Araba Property",
    phone: "09012059519",
    name: "Tolu Araba",
    status: "approved",
  },
  {
    email: "allensmyllen@gmail.com",
    property: "Araba Property",
    phone: "09012059519",
    name: "Tolu Araba",
    status: "approved",
  },
  {
    email: "allensmyllen@gmail.com",
    property: "Araba Property",
    phone: "09012059519",
    name: "Tolu Araba",
    status: "approved",
  },
  {
    email: "allensmyllen@gmail.com",
    property: "Araba Property",
    phone: "09012059519",
    name: "Tolu Araba",
    status: "approved",
  },
  {
    email: "allensmyllen@gmail.com",
    property: "Araba Property",
    phone: "09012059519",
    name: "Tolu Araba",
    status: "approved",
  },
  {
    email: "allensmyllen@gmail.com",
    property: "Araba Property",
    phone: "09012059519",
    name: "Tolu Araba",
    status: "pending",
  },
  {
    email: "allensmyllen@gmail.com",
    property: "Araba Property",
    phone: "09012059519",
    name: "Tolu Araba",
    status: "pending",
  },
  {
    email: "allensmyllen@gmail.com",
    property: "Araba Property",
    phone: "09012059519",
    name: "Tolu Araba",
    status: "pending",
  },
];
const Landlord = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (idx) => {
    setOpenDropdown((prevState) => (prevState === idx ? null : idx));
  };

  return (
    <DashboardLayout header="Landlord">
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
                    Full Name
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Email
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
                    <h6 className="text-[#020202]">{event.name}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.email}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.phone}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.property}</h6>
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
                    openDropdown={openDropdown}
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

export default Landlord;
