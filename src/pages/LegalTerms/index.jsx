import React, { useState, useRef, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../quillCustomStyles.css";
import InputField from "../../components/InputField";
import DeleteModal from "./components/DeleteModal";
import { BsThreeDotsVertical } from "react-icons/bs";

const tableInfo = [
  { title: "Legal Term" },
  { title: "Term of Use" },
  { title: "Privacy Policy" },
];

const LegalTerms = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [formInput, setFormInput] = useState({ title: "" });
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const openEditModal = () => setEditModal(true);
  const closeEditModal = () => setEditModal(false);
  const openDeleteModal = () => setDeleteModal(true);
  const closeDeleteModal = () => setDeleteModal(false);

  const handleDropdownToggle = (idx) => {
    setOpenDropdown((prevState) => (prevState === idx ? null : idx));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleDelete = () => {
    // Handle the delete logic here
    closeDeleteModal();
  };

  const editModalRef = useRef(null);
  const deleteModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        editModalRef.current &&
        !editModalRef.current.contains(event.target)
      ) {
        closeEditModal();
      }
      if (
        deleteModalRef.current &&
        !deleteModalRef.current.contains(event.target)
      ) {
        closeDeleteModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DashboardLayout header="Legal Terms">
      <div className="bg-primary rounded-xl p-11 px-12 flex justify-center items-center">
        <h1 className="text-white text-4xl font-medium">Legal Terms</h1>
      </div>
      <div className="flex flex-col h-full overflow-auto mt-8">
        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-9 py-2 rounded-lg"
            onClick={openEditModal}
          >
            <span>Add New</span>
          </button>
        </div>
      </div>
      <div className="bg-white rounded-md mt-10">
        <div className="tab-content">
          <table className="w-full table-auto text-sm text-left">
            {tableInfo.map((event, idx) => (
              <tr key={idx} className="border-light border-[#E4E7EC]">
                <td className="p-6 whitespace-nowrap">
                  <h6
                    style={{ marginRight: "25rem" }}
                    className="text-[#020202] text-lg"
                  >
                    {event.title}
                  </h6>
                </td>
                <Action
                  idx={idx}
                  openDropdown={openDropdown === idx}
                  handleDropdownToggle={handleDropdownToggle}
                  openEditModal={openEditModal}
                  openDeleteModal={openDeleteModal}
                />
              </tr>
            ))}
          </table>
        </div>
        {editModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[2000]">
            <div
              ref={editModalRef}
              className="bg-white p-10 rounded-lg w-4/5 mx-auto max-h-screen overflow-y-auto my-20"
            >
              <EditTerms close={closeEditModal} />
            </div>
          </div>
        )}
        {deleteModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]">
            <div
              ref={deleteModalRef}
              className="bg-white p-10 rounded-lg w-[26rem] mx-auto"
            >
              <DeleteModal
                closeDeleteModal={closeDeleteModal}
                onDelete={handleDelete}
              />
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default LegalTerms;

const EditTerms = ({ close }) => {
  const [formInput, setFormInput] = useState({ title: "", body: "" });
  const [saveModal, setSaveModal] = useState(false);

  const openSaveModal = () => setSaveModal(true);
  const closeSaveModal = () => setSaveModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleBodyChange = (value) => {
    setFormInput({ ...formInput, body: value });
  };

  return (
    <div className="rounded-md card-shadow p-5 mb-9">
      <h4 className="text-[#080746] font-medium text-xl mb-5">
        Add New Legal Terms
      </h4>
      <div>
        <div className="flex gap-8">
          <InputField
            id="title"
            name="title"
            label="Title"
            placeholder="Enter the title here..."
            value={formInput.title}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="body"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Body
          </label>
          <ReactQuill
            id="body"
            value={formInput.body}
            onChange={handleBodyChange}
            className="h-60 appearance-none border border-[#C6C6C6] w-full py-2 px-2.5 text-black leading-tight focus:outline-[0.5px] focus:outline-[#FF7F51] rounded-md focus:shadow-outline text-base"
            placeholder="Enter the body here..."
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-primary text-white px-5 py-2 rounded-lg"
          onClick={close}
        >
          Add New Legal Terms
        </button>
      </div>
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
    <td className="p-4 whitespace-nowrap relative">
      <button
        className="text-lg flex justify-center"
        onClick={() => handleDropdownToggle(idx)}
      >
        <BsThreeDotsVertical />
      </button>
      {openDropdown && (
        <div className="top-full absolute left-1/2 transform -translate-x-1/2 -mt-4 bg-white rounded-sm shadow p-2 flex flex-col justify-center z-40">
          <button
            className="border-b p-1.5 font-medium inline-block w-full"
            onClick={openEditModal}
          >
            Edit
          </button>
          <button
            className="border-b p-1.5 font-medium inline-block w-full"
            onClick={openDeleteModal}
          >
            Delete
          </button>
        </div>
      )}
    </td>
  );
};
