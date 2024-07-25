import React, { useState, useRef, useEffect } from "react";
import InputField from "../../../components/InputField";

const Overview = ({ close }) => {
  const [formInput, setFormInput] = useState({
    propertyName: "",
    amount: "",
    address: "",
    state: "",
    city: "",
    accountName: "",
    accountNo: "",
    bankName: "",
  });

  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-[2000]">
      <div
        ref={modalRef}
        className="bg-white p-10 rounded-lg w-4/5 mx-auto max-h-screen overflow-y-auto my-20"
      >
        <div className="rounded-md card-shadow p-5 mb-9">
          <h4 className="text-[#080746] font-medium text-xl mb-5">Overview</h4>
          <div>
            <div className="flex gap-8">
              <InputField
                id="propertyName"
                name="propertyName"
                label="Property name"
                placeholder="Tolu Araba Landed Property"
                value={formInput.propertyName}
                onChange={handleChange}
              />
              <InputField
                id="customerName"
                name="customerName"
                label="Customer Name"
                placeholder="Anthony Patta"
                value={formInput.customerName}
                onChange={handleChange}
              />
            </div>
            <div>
              <InputField
                id="address"
                name="address"
                label="Address"
                placeholder="No 24, Ogudu street, Ikeja. Lagos state"
                value={formInput.address}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-8">
              <InputField
                id="amount"
                name="amount"
                label="Amount"
                placeholder="₦11,160"
                value={formInput.amount}
                onChange={handleChange}
              />

              <InputField
                id="bankName"
                name="bankName"
                label="Bank Name"
                placeholder="GTBank"
                value={formInput.bankName}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-8">
              <InputField
                id="accountName"
                name="accountName"
                label="Account Name"
                placeholder="Olaleye Suzan Damilola"
                value={formInput.accountName}
                onChange={handleChange}
              />
              <InputField
                id="accountNo"
                name="accountNo"
                label="Account Number"
                placeholder="0259867433"
                value={formInput.accountNo}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-5 py-2 rounded-lg"
            onClick={close}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
