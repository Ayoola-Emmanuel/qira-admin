import React from "react";

const Card = ({ children }) => {
  return (
    <div className="rounded-lg h-full sm:h-auto md:h-40 py-5 px-8 w-auto border-none card-shadow">
      {children}
    </div>
  );
};

export default Card;
