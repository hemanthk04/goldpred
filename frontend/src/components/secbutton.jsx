import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 bg-white text-[#222] font-geist rounded-md border border-[#222] border-1 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
