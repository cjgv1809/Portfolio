import React from "react";

const Alert = ({ title, content }) => {
  return (
    <div
      className="bg-rose-100 px-4 py-3 rounded-[10px] flex items-start border border-l-8 border-red-700"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 mt-1 mr-2 text-red-600"
      >
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M10 6a1 1 0 00-1 1v4a1 1 0 002 0V7a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M10 12a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <div>
        <h4 className="text-red-600 text-lg font-bold">{title}</h4>
        <p className="text-red-600 text-sm font-medium">{content}</p>
      </div>
    </div>
  );
};

export default Alert;
