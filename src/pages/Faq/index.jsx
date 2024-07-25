import React, { useState, useRef, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../quillCustomStyles.css";
import InputField from "../../components/InputField";
import Notification from "../../components/Notification";
import { PiCaretDownBold } from "react-icons/pi";
import DeleteModal from "./components/DeleteModal";
import { BsThreeDotsVertical } from "react-icons/bs";

const Faq = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [formInput, setFormInput] = useState({
    title: "",
    body: "",
  });
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [visibleTextIndex, setVisibleTextIndex] = useState(null);
  const [faqs, setFaqs] = useState([
    {
      title: "Q: How do I create a new landlord account?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Q: How do I create a new landlord account?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Q: How do I create a new landlord account?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Q: How do I create a new landlord account?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more FAQs as needed...
  ]);
  const [showAll, setShowAll] = useState(false);

  const openEditModal = () => setEditModal(true);
  const closeEditModal = () => setEditModal(false);

  const openDeleteModal = () => setDeleteModal(true);
  const closeDeleteModal = () => setDeleteModal(false);

  const handleDropdownToggle = (idx) => {
    setOpenDropdown((prevState) => (prevState === idx ? null : idx));
  };

  const handleToggleText = (index) => {
    setVisibleTextIndex(visibleTextIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    const newFaq = {
      ...formInput,
      title: `Q: ${formInput.title}`,
    };
    setFaqs([...faqs, newFaq]);
    setFormInput({
      title: "",
      body: "",
    });
  };

  return (
    <DashboardLayout header="FAQ">
      <div className="bg-primary rounded-xl p-11 px-12 flex justify-center items-center">
        <h1 className="text-white text-4xl font-medium">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="flex flex-col h-full overflow-auto mt-8">
        <h4 className="text-[#080746] font-medium text-xl mb-5">Add New FAQ</h4>
        <div className="flex gap-8">
          <InputField
            id="title"
            name="title"
            label="Question"
            placeholder="Enter your question here..."
            value={formInput.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="body"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Answer
          </label>
          <textarea
            id="body"
            name="body"
            placeholder="Enter your answer here..."
            value={formInput.body}
            onChange={handleChange}
            className="appearance-none border border-[#C6C6C6] w-full py-2 px-2.5 text-black leading-tight focus:outline-[0.5px] focus:outline-[#FF7F51] rounded-md focus:shadow-outline text-base h-24"
          />
        </div>
      </div>
      <div className="flex flex-col h-full overflow-auto mt-8">
        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-6 py-2 rounded-lg"
            onClick={handleFormSubmit}
          >
            <span>Save Now</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-md mt-10">
        <div className="tab-content">
          <table className="w-full table-auto text-sm text-left">
            {(showAll ? faqs : faqs.slice(0, 7)).map((faq, idx) => {
              return (
                <React.Fragment key={idx}>
                  <tr className="border-light border-[#E4E7EC]">
                    <td className="p-6 whitespace-nowrap flex items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <h6 className="text-[#020202] text-lg">{faq.title}</h6>
                        <div className="flex items-center">
                          <PiCaretDownBold
                            onClick={() => handleToggleText(idx)}
                            className="cursor-pointer ml-2"
                            style={{ marginRight: "20px" }}
                          />
                          <Action
                            idx={idx}
                            openDropdown={openDropdown === idx}
                            handleDropdownToggle={handleDropdownToggle}
                            openEditModal={openEditModal}
                            openDeleteModal={openDeleteModal}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {visibleTextIndex === idx && (
                    <tr>
                      <td colSpan="2" className="p-6 pt-1">
                        <p className="text-[#020202] text-lg mt-1">
                          {faq.body}
                        </p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </table>
          {faqs.length > 7 && (
            <div className="flex items-center justify-center mt-8">
              <h6
                className="text-[#106A5E] font-medium cursor-pointer"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show less" : "See more"}
              </h6>
            </div>
          )}
        </div>
        {editModal && <EditTerms close={closeEditModal} />}
        {deleteModal && <DeleteModal closeDeleteModal={closeDeleteModal} />}
      </div>
    </DashboardLayout>
  );
};

export default Faq;

const EditTerms = ({ close }) => {
  const [formInput, setFormInput] = useState({
    title: "",
    body: "",
  });
  const [isNotification, setIsNotification] = useState(false);
  const modalRef = useRef(null);

  const openNotificationBadge = () => {
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

  const handleBodyChange = (value) => {
    setFormInput({ ...formInput, body: value });
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[2000]">
      <div
        ref={modalRef}
        className="bg-white p-10 rounded-lg w-4/5 mx-auto max-h-screen overflow-y-auto my-20"
      >
        <div className="rounded-md card-shadow p-5 mb-9">
          <h4 className="text-[#080746] font-medium text-xl mb-5">Edit FAQs</h4>
          <div>
            <div className="flex gap-8">
              <InputField
                id="title"
                name="title"
                label="Question"
                placeholder="Enter your question here..."
                value={formInput.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="body"
                className="mb-2 text-sm font-medium text-gray-700 border-none"
              >
                Answer
              </label>
              <ReactQuill
                id="body"
                value={formInput.body}
                onChange={handleBodyChange}
                className="h-52 appearance-none w-full py-2 px-2.5 text-black leading-tight focus:outline-[0.5px] focus:outline-[#FF7F51] rounded-md focus:shadow-outline text-base"
                placeholder="Enter your answer here..."
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-5 py-2 rounded-lg"
            onClick={() => {
              openNotificationBadge();
              setTimeout(close, 1500);
            }}
          >
            Add New FAQ
          </button>
        </div>
      </div>
      {isNotification && (
        <Notification
          info="FAQ added successfully!"
          onClose={closeNotificationBadge}
        />
      )}
    </div>
  );
};

const Action = ({
  idx,
  openDropdown,
  handleDropdownToggle,
  openEditModal,
  openDeleteModal,
}) => {
  return (
    <div className="relative">
      <button
        className="text-lg flex justify-center"
        onClick={() => handleDropdownToggle(idx)}
        style={{ marginRight: "8px" }}
      >
        <BsThreeDotsVertical />
      </button>
      {openDropdown && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-sm shadow p-2 flex flex-col justify-center z-40">
          <button
            className="border-b p-1.5 font-medium inline-block w-full"
            onClick={openEditModal}
          >
            Edit FAQ
          </button>
          <button
            className="border-b p-1.5 font-medium inline-block w-full"
            onClick={openDeleteModal}
          >
            Delete FAQ
          </button>
        </div>
      )}
    </div>
  );
};
