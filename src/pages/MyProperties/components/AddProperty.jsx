import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import DashboardLayout from "../../../components/DashboardLayout";
import InputField from "../../../components/InputField";
import DropdownInput from "../../../components/DropdownInput";
import PhotoAttachment from "./PhotoAttachment";

const AddProperty = () => {
  const [formInput, setFormInput] = useState({
    propertyTitle: "",
    price: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  return (
    <DashboardLayout>
      <div>
        <Link to="/my-properties" className="flex gap-2 items-center mb-5">
          <span className="font-medium text-xl">
            <IoArrowBack />
          </span>
          <span className="font-medium text-lg text-[#080746]">Back</span>
        </Link>
        <div className="bg-white rounded-md card-shadow py-4 px-6">
          <h4 className="text-[#080746] font-semibold text-xl mb-5">
            Overview
          </h4>
          <div className="flex gap-8">
            <InputField
              id="propertyTitle"
              name="propertyTitle"
              label="Property Title*"
              placeholder="your property name"
              value={formInput.propertyTitle}
              onChange={handleChange}
            />
            <div className="mb-7 w-full">
              <label
                className="block font-medium text-sm text-[#020202] mb-2"
                htmlFor="availability"
              >
                Category*
              </label>
              <DropdownInput
                suggestions={[
                  "villa",
                  "1-Bed",
                  "2-Bed",
                  "3-Bed",
                  "Condo",
                  "Duplex",
                  "Mini-flat",
                  "Studio",
                ]}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <InputField
              id="price"
              name="price"
              label="Price*"
              placeholder="your price"
              value={formInput.price}
              onChange={handleChange}
            />
            <div className="mb-7 w-full">
              <label
                className="block font-medium text-sm text-[#020202] mb-2"
                htmlFor="availability"
              >
                Payment types*
              </label>
              <DropdownInput
                suggestions={["Daily", "Weekly", "Monthly", "Yearly"]}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <InputField
              id="address"
              name="address"
              label="Address*"
              placeholder="Enter address"
              value={formInput.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <PhotoAttachment />
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-primary px-6 rounded-md py-2 text-white">
          Publish Property
        </button>
      </div>
    </DashboardLayout>
  );
};

export default AddProperty;
