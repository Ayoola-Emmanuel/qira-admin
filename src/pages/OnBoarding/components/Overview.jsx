import React, { useState } from "react";
import InputField from "../../../components/InputField";

const Overview = ({ handleNext }) => {
  const [formInput, setFormInput] = useState({
    propertyName: "",
    phoneNo1: "",
    phoneNo2: "",
    address: "",
    state: "",
    city: "",
    idProof: "",
    idNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="border shadow border-[#E4E7EC] p-4 rounded mt-6">
        <h4 className="text-[#080746] font-semibold text-lg mb-5">Overview</h4>
        <div className="my-2">
          <div className="flex gap-6">
            <InputField
              id="propertyName"
              name="propertyName"
              type="text"
              label="Property Name*"
              placeholder="Your property name"
              value={formInput.propertyName}
              onChange={handleChange}
            />
            <InputField
              id="phoneNo1"
              name="phoneNo1"
              type="text"
              label="Phone Number*"
              placeholder="+234 90120 59-519"
              value={formInput.phoneNo1}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-6">
            <InputField
              id="phoneNo2"
              name="phoneNo2"
              type="text"
              label="Phone Number*"
              placeholder="+234 90120 59-519"
              value={formInput.phoneNo2}
              onChange={handleChange}
            />
            <InputField
              id="address"
              name="address"
              type="text"
              label="Your Address"
              placeholder="8, Olalusi Street, Owode Onirin Bus stop, Ikorodu Road"
              value={formInput.address}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-6">
            <InputField
              id="state"
              name="state"
              type="text"
              label="State"
              placeholder="Lagos"
              value={formInput.state}
              onChange={handleChange}
            />
            <InputField
              id="city"
              name="city"
              type="text"
              label="City"
              placeholder="Ikeja"
              value={formInput.city}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-6">
            <InputField
              id="idProof"
              name="idProof"
              type="text"
              label="Proof of identity"
              placeholder="BVN"
              value={formInput.idProof}
              onChange={handleChange}
            />
            <InputField
              id="idNumber"
              name="idNumber"
              type="text"
              label="Identity Number*"
              placeholder="Your property name"
              value={formInput.propertyName}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-primary text-white rounded-lg py-2 px-12"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Overview;
