import { useState } from "react";
import InputField from "../../../components/InputField";
import checkers from "../../../assets/checkers.png";
import Notification from "../../../components/Notification";
import { FaRegTrashAlt } from "react-icons/fa";
import DropdownInput from "../../../components/DropdownInput";
import Dropdown from "../../../components/Dropdown";

const PersonalInformation = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    phoneNo: "",
    email: "",
    city: "",
    state: "",
    bvn: "",
    accountNo: "",
    bankName: "",
    gender: "",
  });

  const [isNotification, setIsNotification] = useState(false);

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
  return (
    <div>
      <h4 className="font-medium text-2xl">Personal Information</h4>
      <div className="w-9/12 my-5">
        <div className="flex gap-8 mb-6">
          <ProfilePicture />
        </div>
        <div className="">
          <InputField
            id="name"
            name="name"
            label="Full Name"
            placeholder="Olaleye Susan"
            value={formInput.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <InputField
            id="phoneNo"
            name="phoneNo"
            label="Phone Number"
            placeholder="081-4534-45762"
            value={formInput.phoneNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <InputField
            id="email"
            name="email"
            label="Email Address"
            placeholder="olaleyesusan03@gmail.com"
            value={formInput.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex gap-1 w-full">
            <div className="w-32">
              <InputField
                id="day"
                name="day"
                label="Date of Birth"
                placeholder="Day"
                value={formInput.day}
                onChange={handleChange}
              />
            </div>
            <div className="w-32">
              <InputField
                id="month"
                name="month"
                label="&nbsp;"
                placeholder="Month"
                value={formInput.month}
                onChange={handleChange}
              />
            </div>
            <div className="w-32">
              <InputField
                id="year"
                name="year"
                label="&nbsp;"
                placeholder="Year"
                value={formInput.year}
                onChange={handleChange}
              />
            </div>
          </div>

            <Dropdown
              label="Gender"
              options={["Male", "Female"]}
              defaultValue="Male"
              onSelectOption={(selectedGender) => {
                setFormInput({ ...formInput, gender: selectedGender });
              }}
            />
        </div>
      </div>
      <div className="flex justify-end">
        {/* onClick={openEditModal}*/}
        <button
          className="bg-primary text-white px-5 py-2 rounded-lg"
          onClick={openNotificationBadge}
        >
          Save changes
        </button>
      </div>
      {isNotification && (
        <Notification
          info="Details successfully changed!"
          onClose={closeNotificationBadge}
        />
      )}
    </div>
  );
};

export default PersonalInformation;

const ProfilePicture = () => {
  const [profileImage, setProfileImage] = useState(checkers); // Default profile picture

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(checkers);
  };

  return (
    <div className="flex items-center">
      <img
        src={profileImage}
        alt="Profile"
        className="h-24 w-24 rounded-full object-cover"
      />

      <label
        htmlFor="image-upload"
        className="ml-5 cursor-pointer text-[#C0C0C0] border border-[#C0C0C0] py-0.5 px-2.5 rounded"
      >
        choose
      </label>

      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      <button
        onClick={handleDeleteImage}
        className="ml-6 flex items-center gap-2.5 text-red-500"
      >
        <span className="font-semibold text-lg">
          <FaRegTrashAlt />
        </span>
        <span>Delete</span>
      </button>
      <p className="ml-3 text-[#181D25]">JPG,GIF or PNG. 3MB Max</p>
    </div>
  );
};
