import React, { useState } from "react";
import InputField from "../../../components/InputField";

const Payment = ({handleSubmit}) => {
  const [formInput, setFormInput] = useState({
    accountName: "",
    bankAccount: "",
    accountNo: "",
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
        <h4 className="text-[#080746] font-semibold text-lg mb-5">
          How do you want to get paid?
        </h4>
        <div className="my-2">
          <div className="flex gap-6">
            <InputField
              id="accountName"
              name="accountName"
              type="text"
              label="Account Holder Name*"
              placeholder="Your account name"
              value={formInput.accountName}
              onChange={handleChange}
            />
            <InputField
              id="bankAccount"
              name="bankAccount"
              type="text"
              label="Bank Account*"
              placeholder="UBA"
              value={formInput.bankAccount}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-6 items-center">
            <InputField
              id="accountName"
              name="accountName"
              type="text"
              label="Account Holder Name*"
              placeholder="Your account name"
              value={formInput.accountName}
              onChange={handleChange}
            />
            <div className="py-3 font-semibold px-5 bg-[#E4E7EC] rounded uppercase w-full">
              Evwindonor allen edoja
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-primary text-white rounded-lg py-2 px-12"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Payment;
