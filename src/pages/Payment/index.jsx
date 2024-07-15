import React, {useState} from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Pagination from "../../components/Pagination";
import DropDown from "./components/DropDown";
import Overview from "./components/Overview"; // Import the Overview component
import { BsThreeDotsVertical } from "react-icons/bs";
import apartment from "../../assets/apartment.jpg"

const propertiesInfo = [
  {
    id: 1,
    apartment: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "₦4,321",
    date: "13 Jan, 2023",
    price: "₦12,000",
    commission: "₦850",
    payment: "₦11,160",
  },
  {
    apartment: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "₦4,321",
    date: "13 Jan, 2023",
    price: "₦12,000",
    commission: "₦850",
    payment: "₦11,160",
  },
  {
    apartment: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "₦4,321",
    date: "13 Jan, 2023",
    price: "₦12,000",
    commission: "₦850",
    payment: "₦11,160",
  },
  {
    apartment: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "₦4,321",
    date: "13 Jan, 2023",
    price: "₦12,000",
    commission: "₦850",
    payment: "₦11,160",
  },
  {
    apartment: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "₦4,321",
    date: "13 Jan, 2023",
    price: "₦12,000",
    commission: "₦850",
    payment: "₦11,160",
  },
  {
    apartment: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "₦4,321",
    date: "13 Jan, 2023",
    price: "₦12,000",
    commission: "₦850",
    payment: "₦11,160",
  },
  {
    apartment: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "₦4,321",
    date: "13 Jan, 2023",
    price: "₦12,000",
    commission: "₦850",
    payment: "₦11,160",
  },
  {
    apartment: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "₦4,321",
    date: "13 Jan, 2023",
    price: "₦12,000",
    commission: "₦850",
    payment: "₦11,160",
  },
  {
    apartment: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "₦4,321",
    date: "13 Jan, 2023",
    price: "₦12,000",
    commission: "₦850",
    payment: "₦11,160",
  },
  {
    apartment: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "₦4,321",
    date: "13 Jan, 2023",
    price: "₦12,000",
    commission: "₦850",
    payment: "₦11,160",
  },
];
const Payment = () => {
  const [data, setData] = useState(propertiesInfo);
  const [dropdown, setDropdown] = useState({});
  const [showOverview, setShowOverview] = useState(false); // State to manage overview modal visibility

  const handleDropdownToggle = (index) => {
    setDropdown((prevState) => {
      const newState = { ...prevState };
      newState[index] = !prevState[index];
      for (let key in newState) {
        if (key !== index.toString()) {
          newState[key] = false;
        }
      }
      return newState;
    });
  };

    const handleViewDetails = (index) => {
      setShowOverview(true);
      handleDropdownToggle(index); // Close the dropdown menu when opening overview modal
    };

  return (
    <DashboardLayout header="Payment">
      <DropDown />
      <div>
        <div className="tab-content">
          <table className="w-full table-auto text-sm text-left">
            <thead className=" bg-[#F9F9F9] px-3">
              <tr>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Apartment
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">Date</h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Amount Paid
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    7% Commission
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Payment Due
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Actions
                  </h6>
                </th>
              </tr>
            </thead>
            {data.map((event, idx) => {
              return (
                <tr key={idx} className="border-b border-[#E4E7EC]">
                  <td className="p-4 whitespace-nowrap">
                    <div className="flex gap-4">
                      <div className="basis-32 h-20">
                        <img
                          src={apartment}
                          alt="apartment"
                          className="w-full h-full rounded-md"
                        />
                      </div>
                      <div>
                        <h6 className="font-semibold text-lg text-[#020202] mb-1">
                          {event.title}
                        </h6>
                        <p className="text-[#020202] text-[17px] mb-1.5">
                          {event.address}
                        </p>
                        <div className="flex gap-1">
                          <h6 className="text-primary font-bold text-[17px]">
                            {event.amount}{" "}
                          </h6>
                          <p>/ month</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.date}</h6>
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.price}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.commission}</h6>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <h6 className="text-[#020202]">{event.payment}</h6>
                  </td>

                  <td className="p-4 whitespace-nowrap relative">
                    <button
                      className="text-lg flex justify-center"
                      onClick={() => handleDropdownToggle(idx)}
                    >
                      <BsThreeDotsVertical />
                    </button>
                    {dropdown[idx] && (
                      <div className="absolute left-1 -bottom-10 bg-white rounded-sm shadow p-2 flex flex-col justify-center z-10">
                        <button
                          className="border-b p-1.5 font-medium inline-block"
                          // onClick={openEditModal}
                        >
                          Pay Now
                        </button>
                        <button
                          className="p-1.5 cursor-pointer font-medium"
                          onClick={() => handleViewDetails(idx)} // Open overview modal on click
                        >
                          View Details
                        </button>
                      </div>
                    )}
                  </td>
                  {/* {editModal && (
                  <EditModal
                    openEditModal={openEditModal}
                    closeEditModal={closeEditModal}
                  />
                )}
                {deleteModal.isOpen && deleteModal.idx === idx && (
                  <DeleteModal
                    closeDeleteModal={closeDeleteModal}
                    idx={idx}
                    deleteProperty={deleteProperty}
                  />
                )} */}
                </tr>
              );
            })}
          </table>
        </div>
        <Pagination />
      </div>
      {showOverview && <Overview close={() => setShowOverview(false)} />}{" "}
      {/* Render overview modal */}
    </DashboardLayout>
  );
};

export default Payment;
