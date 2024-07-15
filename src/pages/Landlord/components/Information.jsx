import React, { useState, useEffect } from "react";
import SaveModal from "./SaveModal";
import DeleteModal from "./DeleteModal";

const Information = ({ onClose }) => {
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.getElementById("information-modal");
      const backdrop = document.getElementById("backdrop");
      if (
        (modal && !modal.contains(event.target)) ||
        event.target === backdrop
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleApproveClick = () => {
    setSaveModalOpen(true);
  };

  const handleRejectClick = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const deleteProperty = () => {
    closeDeleteModal();
  };

  const closeSaveModal = () => {
    setSaveModalOpen(false);
  };

  return (
    <div
      id="backdrop"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]"
    >
      <div
        id="information-modal"
        className="bg-white p-10 py-6 rounded-lg w-[48rem] mx-auto"
      >
        <div className="flex justify-center text-[#FF2730] text-8xl mb-4"></div>
        <div className="flex justify-between items-center mb-5">
          <div className="bg-[#FFEAD4] flex gap-2 items-center rounded-md px-3 py-0.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FE982A]"></span>
            <span className="text-[#FE982A]">Pending</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="basis-2/3">
            <div className="flex gap-6 mb-4">
              <div className="mr-12">
                <h4 className="text-[#020202] font-semibold mb-2">
                  Tolu Araba Landed Property
                </h4>
                <p className="text-[#333]">Property Name</p>
              </div>
              <div className="ml-1 mr-10">
                <h4 className="text-[#020202] font-semibold mb-2">5</h4>
                <p className="text-[#333]">Properties Owned</p>
              </div>
              <div className="mr-6">
                <h4 className="text-[#020202] font-semibold mb-2">
                  09012059519
                </h4>
                <p className="text-[#333]">Phone Contact</p>
              </div>
              <div className="ml-2">
                <h4 className="text-[#020202] font-semibold mb-2">
                  22920022002
                </h4>
                <p className="text-[#333]">BVN</p>
              </div>
            </div>

            <div className="flex gap-6 mb-2">
              <div className="basis-1/3 mr-1">
                <h4 className="text-[#020202] font-semibold mb-2">
                  8 Olalusi Street, Owode Onirin, <br></br>Ikorodu Bus Stop,
                  Lagos, Nigeria
                </h4>
                <p className="text-[#333] ">House Address</p>
              </div>
              <div className=" ml-1 mr-15">
                <h4 className="text-[#020202] font-semibold mb-2">Lagos</h4>
                <p className="text-[#333]">State</p>
              </div>
              <div className="ml-28 mr-20">
                <h4 className="text-[#020202] font-semibold mb-2">Ikeja</h4>
                <p className="text-[#333]">City</p>
              </div>
              <div className="ml-3">
                <h4 className="text-[#020202] font-semibold mb-2">
                  22920022002
                </h4>
                <p className="text-[#333]">
                  UBA Bank<br></br>Allen Evwidonor
                </p>
              </div>
            </div>
            <div className="flex gap-6 mb-2">
              <div className="basis-1/3 mr-1">
                <h4 className="text-[#020202] font-semibold mb-2">&nbsp;</h4>
              </div>
              <div className=" ml-1 mr-15">
                <h4 className="text-[#020202] font-semibold mb-2">&nbsp;</h4>
              </div>
              <div className="ml-[12rem] flex flex-row justify-between space-x-5">
                <button
                  className="bg-primary px-7 rounded-md text-white py-1.5"
                  onClick={handleApproveClick}
                >
                  Approve
                </button>
                <button
                  className="bg-[#FF2730] px-8 rounded-md text-white py-1.5"
                  onClick={handleRejectClick}
                >
                  Reject
                </button>
                {deleteModalOpen && (
                  <DeleteModal
                    onClose={closeDeleteModal}
                    deleteProperty={deleteProperty}
                  />
                )}
                {saveModalOpen && <SaveModal onClose={closeSaveModal} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
