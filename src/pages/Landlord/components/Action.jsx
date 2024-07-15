import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import SaveModal from "./SaveModal";
import DeleteModal from "./DeleteModal";
import Information from "./Information";

const Action = ({ idx, openDropdown, handleDropdownToggle }) => {
  const [showInformation, setShowInformation] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  const handleRejectClick = () => {
    setShowDeleteModal(true);
    handleDropdownToggle(null);
  };

  const handleApproveClick = () => {
    setShowSaveModal(true);
    handleDropdownToggle(null);
  };
  const handleInfoClick = () => {
    setShowInformation(true);
    handleDropdownToggle(null);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleCloseSaveModal = () => {
    setShowSaveModal(false);
  };
  const handleCloseInformation = () => {
    setShowInformation(false);
  };

  return (
    <td className="p-4 whitespace-nowrap relative">
      <button
        className="text-lg flex justify-center"
        onClick={() => handleDropdownToggle(idx)}
      >
        <BsThreeDotsVertical />
      </button>
      {openDropdown === idx && (
        <div className="absolute -left-2 mt-2 bg-white rounded-sm shadow p-2 flex flex-col justify-center z-10">
          <button className="border-b p-1.5 font-medium inline-block w-full"
            onClick={handleInfoClick}
          >
            View Info
          </button>
          <button
            className="border-b p-1.5 font-medium inline-block w-full"
            onClick={handleApproveClick}
          >
            Approve
          </button>
          <button
            className="p-1.5 cursor-pointer font-medium w-full"
            onClick={handleRejectClick}
          >
            Reject
          </button>
        </div>
      )}
      {showDeleteModal && (
        <DeleteModal
          closeDeleteModal={handleCloseDeleteModal}
          idx={idx}
          deleteProperty={() => {
            console.log("Delete property with index", idx);
            handleCloseDeleteModal();
          }}
        />
      )}
      {showSaveModal && <SaveModal onClose={handleCloseSaveModal} />}
      {showInformation && <Information onClose={handleCloseInformation} />}
    </td>
  );
};

export default Action;
