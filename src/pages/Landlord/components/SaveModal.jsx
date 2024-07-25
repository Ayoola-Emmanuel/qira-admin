import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Notification from "../../../components/Notification";

const SaveModal = ({ onClose }) => {
  const handleSubmit = () => {
    // Handle submission logic here
    // For example, save changes and then close the modal
    onClose();
  };

  const [isNotification, setIsNotification] = useState(false);
  const [saveModal, setSaveModal] = useState(false);

  const openSaveModal = () => setSaveModal(true);
  const closeSaveModal = () => setSaveModal(false);

  const openNotificationBadge = () => {
    closeSaveModal();
    setIsNotification(true);
  };
  const closeNotificationBadge = () => setIsNotification(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]">
      <div className="bg-white p-10 rounded-lg w-[26rem] mx-auto">
        <div className="flex justify-center text-primary text-8xl mb-4">
          <AiOutlineCloseCircle />
        </div>
        <div className="text-center mb-5">
          <h6 className="text-[#020202] font-semibold text-2xl mb-1.5">
            Edit Landlord?
          </h6>
          <p>
            Are you sure you want to do this? <br></br>This process can not be
            undone.
          </p>
        </div>
        <div className="flex gap-6 my-4">
          <button
            className="w-full py-1.5 rounded-md shadow-sm bg-transparent border border-[#E1E5EA]"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full py-1.5 rounded-md bg-primary text-white"
            onClick={() => {
              openNotificationBadge();
              setTimeout(handleSubmit, 1000);
            }}
          >
            Approve
          </button>
        </div>
      </div>
      {isNotification && (
        <Notification
          info="Tolu Araba successfully approved!"
          onClose={closeNotificationBadge}
        />
      )}
    </div>
  );
};

export default SaveModal;
