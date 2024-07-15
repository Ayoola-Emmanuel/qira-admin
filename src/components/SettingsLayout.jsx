import React from "react";
import { NavLink } from "react-router-dom";

import { GrShieldSecurity } from "react-icons/gr";
import { LuUserCog } from "react-icons/lu";
import { SlBriefcase } from "react-icons/sl";
import DashboardLayout from "./DashboardLayout";

const sidetab = [
  {
    link: "/settings/personal-information",
    icon: <LuUserCog />,
    title: "Personal Information",
  },
  {
    link: "/settings/bank-information",
    icon: <SlBriefcase />,
    title: "Bank Information",
  },
  {
    link: "/settings/password-details",
    icon: <GrShieldSecurity />,
    title: "Password Details",
  },
];

const SettingsLayout = ({ children }) => {
  return (
    <DashboardLayout header="Settings">
      <div className="flex gap-16 items-start">
        <div className="p-3 rounded-md border-[1.5px] border-[#1052BA] flex flex-col gap-2 w-72">
          {sidetab.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#080746] text-white sidebar"
                  : "sidebar hover:bg-[#080746] hover:text-white active:bg-[#080746] duration-150"
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.title}</span>
            </NavLink>
          ))}
        </div>
        <div className="w-4/5">{children}</div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsLayout;
