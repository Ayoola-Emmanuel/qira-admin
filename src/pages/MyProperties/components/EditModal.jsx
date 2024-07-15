import React, { useEffect, useState } from "react";
import InputField from "../../../components/InputField";
import PhotoAttachment from "./PhotoAttachment";
import DropdownInput from "../../../components/DropdownInput";
import { AiOutlineCloseCircle } from "react-icons/ai";

const EditModal = ({ openEditModal, closeEditModal }) => {
  const [formInput, setFormInput] = useState({
    propertyName: "",
    amount: "",
    address: "",
    state: "",
    city: "",
    phoneNo: "",
  });

  const [submitModal, setSubmitModal] = useState(false);

  const openSubmitModal = () => {
    setSubmitModal(true);
  };
  const closeSubmitModal = () => setSubmitModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  useEffect(() => {
    if (openEditModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openEditModal]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-[2000]">
      <div className="bg-white p-10 rounded-lg w-4/5 mx-auto max-h-screen overflow-y-auto my-20">
        <div className="rounded-md card-shadow p-5 mb-9">
          <h4 className="text-[#080746] font-medium text-xl mb-5">Overview</h4>
          <div>
            <div className="flex gap-8">
              <InputField
                id="propertyName"
                name="propertyName"
                label="Property name"
                placeholder="Warm and Cozy Apartment"
                value={formInput.propertyName}
                onChange={handleChange}
              />
              <InputField
                id="amount"
                name="amount"
                label="Amount/month"
                placeholder="#4,500"
                value={formInput.amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <InputField
                id="address"
                name="address"
                label="Address"
                placeholder="No 24, Ogudu street, ikeja. Lagos state"
                value={formInput.address}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-8">
              <InputField
                id="state"
                name="state"
                label="State"
                placeholder="Lagos"
                value={formInput.state}
                onChange={handleChange}
              />
              <InputField
                id="city"
                name="city"
                label="City"
                placeholder="Ikeja"
                value={formInput.city}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-8">
              <InputField
                id="phoneNo"
                name="phoneNo"
                label="Phone Number"
                placeholder="090168685259"
                value={formInput.phoneNo}
                onChange={handleChange}
              />
              <div className="mb-7 w-full">
                <label
                  className="block font-medium text-sm text-[#020202] mb-2"
                  htmlFor="availability"
                >
                  Availability
                </label>
                <DropdownInput suggestions={["Available", "Rented"]} />
              </div>
            </div>
          </div>
        </div>
        <PhotoAttachment />

        <div className="flex justify-end">
          <button
            className="bg-primary text-white rounded-md px-9 py-2.5"
            onClick={openSubmitModal}
          >
            Submit
          </button>
        </div>
      </div>
      {submitModal && <div className="bg-red-900 p-10"></div>}
    </div>
  );
};

export default EditModal;
