import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { GrShieldSecurity } from "react-icons/gr";
import { LuUserCog } from "react-icons/lu";
import { SlBriefcase } from "react-icons/sl";
import PersonalInformation from "./components/PersonalInformation";
import PasswordSettings from "./components/PasswordSettings";
import InspectionFees from "./components/InspectionFees";

const sidetab = [
  {
    tab: "tab1",
    icon: <LuUserCog />,
    title: "Personal Information",
  },
  {
    tab: "tab2",
    icon: <SlBriefcase />,
    title: "Inspection Fees",
  },
  {
    tab: "tab3",
    icon: <GrShieldSecurity />,
    title: "Password Details",
  },
];
const Settings = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const activateTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <DashboardLayout header="Settings">
      <div className="flex gap-16 items-start">
        <div className="p-3 rounded-md border-[1.5px] border-[#1052BA] flex flex-col gap-2.5 w-72">
          {sidetab.map((item, index) => (
            <button
              key={index}
              className={`flex gap-3 items-center p-2.5 rounded-md ${
                activeTab === item.tab ? "bg-[#080746] text-white" : ""
              }`}
              onClick={() => activateTab(item.tab)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.title}</span>
            </button>
          ))}
        </div>
        <div className="w-4/5">
          {activeTab === "tab1" && <PersonalInformation />}
          {activeTab === "tab2" && <InspectionFees />}
          {activeTab === "tab3" && <PasswordSettings />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
