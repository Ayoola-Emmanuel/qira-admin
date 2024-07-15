import React, {useState} from 'react'

const navbar = [
  {
    nav: "nav1",
    title: "All(22)",
  },
  {
    nav: "nav2",
    title: "Pending",
  },
  {
    nav: "nav3",
    title: "Approved",
  },
];

const List = () => {
  const [activeNav, setActiveNav] = useState("nav1");
  return (
      <div className="w-4/5">
        <nav className="flex gap-9 justify-start items-center">
          {navbar.map((item, index) => (
            <button
              key={index}
              className={`${
                activeNav === item.nav
                  ? "text-primary border-b-2 border-primary font-medium"
                  : "text-[#1E1E1EB2]"
              } text-lg`}
              onClick={() => setActiveNav(item.nav)}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
  );
};

export default List;