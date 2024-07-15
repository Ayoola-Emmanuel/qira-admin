import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Action = ({ idx, openDropdown, handleDropdownToggle }) => {
  return (
    <td className="p-4 whitespace-nowrap relative">
      <button
        className="text-lg flex justify-center"
        onClick={() => handleDropdownToggle(idx)}
      >
        <BsThreeDotsVertical />
      </button>
      {openDropdown && (
        <div className="top-full absolute left-1/2 transform -translate-x-1/2 -mt-4 bg-white rounded-sm shadow p-2 flex flex-col justify-center z-40">
          <button
            className="border-b p-1.5 font-medium inline-block w-full"
            // onClick={openEditModal}
          >
            Mark as completed
          </button>
          <button
            className="border-b p-1.5 font-medium inline-block w-full"
            // onClick={openEditModal}
          >
            Reschedule
          </button>
          <button
            className="p-1.5 cursor-pointer font-medium w-full"
            // onClick={() => openDeleteModal(idx)}
          >
            Contact Landlord
          </button>
        </div>
      )}
    </td>
  );
};

export default Action;
