import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Pagination from "../../components/Pagination";
import { BsThreeDotsVertical } from "react-icons/bs";
import apartment from "../../assets/apartment.jpg";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";

const propertiesInfo = [
  {
    id: 1,
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
  {
    title: "Warm and Cozy Apartment",
    address: "Belia Garden, California",
    amount: "N4,321",
    date: "13 Jan, 2023",
    view: 1211,
  },
];

const MyProperties = () => {
  const [data, setData] = useState(propertiesInfo);
  const [dropdown, setDropdown] = useState({});
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    idx: null,
  });
  const [editModal, setEditModal] = useState(false);

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

  const openDeleteModal = (idx) => {
    setDeleteModal({ isOpen: true, idx });
  };
  const closeDeleteModal = () => {
    setDeleteModal({ isOpen: false, idx: null });
  };

  const openEditModal = () => {
    setEditModal(true);
  };
  const closeEditModal = () => {
    setEditModal(false);
  };

  const deleteProperty = (idx) => {
    setData((prevData) => prevData.filter((_, index) => index !== idx));

    setDropdown((prevState) => {
      const newState = { ...prevState };
      newState[idx] = false;
      return newState;
    });

    closeDeleteModal();
  };

  return (
    <DashboardLayout header="Properties">
      <div className="bg-white card-shadow w-full rounded-md">
        <div className="tab-content">
          <table className="w-full table-auto text-sm text-left">
            <thead className=" bg-[#F9F9F9] px-3">
              <tr>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Title
                  </h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">Date</h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">View</h6>
                </th>
                <th className="p-4">
                  <h6 className="font-semibold text-sm text-[#020202]">
                    Status
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
                    <h6 className="text-[#020202]">{event.view}</h6>
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <button className="px-3.5 shadow-sm flex items-center gap-2 rounded-full py-1 cursor-default bg-[#ECFDF3]">
                      <span className="inline-block w-3 h-3 rounded-full bg-[#12B76A]"></span>
                      <span className="text-[#027A48] font-medium">Active</span>
                    </button>
                  </td>

                  <td className="p-4 whitespace-nowrap relative">
                    <button
                      className="text-lg flex justify-center"
                      onClick={() => handleDropdownToggle(idx)}
                    >
                      <BsThreeDotsVertical />
                    </button>
                    {dropdown[idx] && (
                      <div className="absolute left-1 -bottom-4 bg-white rounded-sm shadow p-2 flex flex-col justify-center z-10">
                        <button
                          className="border-b p-1.5 font-medium inline-block"
                          onClick={openEditModal}
                        >
                          Edit
                        </button>
                        <button
                          className="p-1.5 cursor-pointer font-medium"
                          onClick={() => openDeleteModal(idx)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                  {editModal && (
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
                  )}
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

export default MyProperties;
