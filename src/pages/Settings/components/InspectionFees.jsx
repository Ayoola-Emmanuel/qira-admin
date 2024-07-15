import React, { useState } from "react";
import InputField from "../../../components/InputField";
import Notification from "../../../components/Notification";
import DropdownInput from "../../../components/DropdownInput";

const InspectionFees = () => {
  const [formInput, setFormInput] = useState({
    // name: "",
    // phoneNo: "",
    amount: "",
    // currency: "",
    // accountNo: "",
    // bankName: "",
  });

  const [editModal, setEditModal] = useState(false);

  const openEditModal = () => setEditModal(true);
  const closeEditModal = () => setEditModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  return (
    <div className="w-9/12">
      <h4 className="font-medium text-2xl">Inspection Fees</h4>
      <div className="my-7">
        {/* <div className="">
          <InputField
            id="name"
            name="name"
            label="Name"
            placeholder="Tolu Araba Landed Property"
            value={formInput.name}
            onChange={handleChange}
          />
        </div> */}
        {/* <div>
          <InputField
            id="address"
            name="address"
            label="House Address"
            placeholder="8 Olalusi Street, Owode Onirin Ikorodu Bus Stop, Lagos Nigeria"
            value={formInput.address}
            onChange={handleChange}
          />
        </div> */}
        <div className="flex gap-6">
          <InputField
            id="amount"
            name="amount"
            label="Amount"
            placeholder="₦3,500"
            value={formInput.amount}
            onChange={handleChange}
          />
          {/* <InputField
            id="currency"
            name="currency"
            label="Currency"
            placeholder="Naira"
            value={formInput.currency}
            onChange={handleChange}
          /> */}
        </div>
        {/* <div className="flex gap-6">
          <InputField
            id="accountNo"
            name="accountNo"
            label="Account No"
            placeholder="0259867433"
            value={formInput.accountNo}
            onChange={handleChange}
          />
          <InputField
            id="bankName"
            name="bankName"
            label="Bank Name"
            placeholder="UBA"
            value={formInput.bankName}
            onChange={handleChange}
          />
        </div> */}
      </div>
      <div className="flex justify-end">
        <button
          className="bg-primary text-white rounded-md px-5 py-2"
          onClick={openEditModal}
        >
          Edit Information
        </button>
      </div>
      {editModal && <EditInspectionFees close={closeEditModal} />}
    </div>
  );
};

export default InspectionFees;

const EditInspectionFees = ({ close }) => {
  const [formInput, setFormInput] = useState({
    // propertyName: "",
    amount: "",
    // address: "",
    // state: "",
    // city: "",
    // accountName: "",
    // accountNo: "",
    // bankName: "",
  });

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[2000]">
      <div className="bg-white p-10 rounded-lg w-4/5 mx-auto max-h-screen overflow-y-auto my-20">
        <div className="rounded-md card-shadow p-5 mb-9">
          <h4 className="text-[#080746] font-medium text-xl mb-5">
            Inspection Fees
          </h4>
          <div>
            <div className="flex gap-8">
              {/* <InputField
                id="propertyName"
                name="propertyName"
                label="Property name"
                placeholder="Tolu Araba Landed Property"
                value={formInput.propertyName}
                onChange={handleChange}
              /> */}
              <InputField
                id="amount"
                name="amount"
                label="Amount"
                placeholder="₦3,500"
                value={formInput.amount}
                onChange={handleChange}
              />
            </div>
            {/* <div>
              <InputField
                id="address"
                name="address"
                label="Address"
                placeholder="No 24, Ogudu street, Ikeja. Lagos state"
                value={formInput.address}
                onChange={handleChange}
              />
            </div> */}
            {/* <div className="flex gap-8">
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
            <div className="w-full sm:w-[48%]">
              <InputField
                id="bankName"
                name="bankName"
                label="Bank Name"
                placeholder="GTBank"
                value={formInput.bankName}
                onChange={handleChange}
              />
            </div> */}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-5 py-2 rounded-lg"
            onClick={() => {
              openNotificationBadge();
              setTimeout(close, 1000);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      {isNotification && (
        <Notification
          info="Amount successfully changed!"
          onClose={closeNotificationBadge}
        />
      )}
    </div>
  );
};
