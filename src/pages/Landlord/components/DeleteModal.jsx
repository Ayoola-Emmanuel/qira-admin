import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Notification from "../../../components/Notification";

const DeleteModal = ({ closeDeleteModal, deleteProperty }) => {
  const [isNotification, setIsNotification] = useState(false);

  const openNotificationBadge = () => {
    setIsNotification(true);
  };
  const closeNotificationBadge = () => setIsNotification(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]">
      <div className="bg-white p-10 rounded-lg w-[26rem] mx-auto">
        <div className="flex justify-center text-[#FF2730] text-8xl mb-4">
          <AiOutlineCloseCircle />
        </div>
        <div className="text-center mb-5">
          <h6 className="text-[#020202] font-semibold text-2xl mb-1.5">
            Reject Landlord?
          </h6>
          <p>
            Are you sure you want to do this? This process can <br></br>not be
            undone.
          </p>
        </div>
        <div className="flex gap-6 my-4">
          <button
            className="w-full py-1.5 rounded-md shadow-sm bg-transparent border border-[#E1E5EA]"
            onClick={() => {
              console.log("Cancel button clicked");
              deleteProperty();
            }}
          >
            Cancel
          </button>
          <button
            className="w-full py-1.5 rounded-md bg-[#FF2730] text-white"
            onClick={() => {
              openNotificationBadge();
              setTimeout(deleteProperty, 1000);
            }}
          >
            Reject
          </button>
        </div>
      </div>
      {isNotification && (
        <Notification
          info="Tolu Araba successfully rejected!"
          onClose={closeNotificationBadge}
        />
      )}
    </div>
  );
};

export default DeleteModal;
