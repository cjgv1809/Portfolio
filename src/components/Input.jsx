import React from "react";

const Input = ({ register, label, isInput = true }) => {
  return (
    <>
      <label
        className="text-white text-sm font-semibold capitalize after:content-['(Required)'] after:text-secondary after:ml-1"
        htmlFor={label}
      >
        {label}
      </label>
      {isInput ? (
        <input
          id={label}
          type={label === "email" ? "email" : "text"}
          name={label}
          placeholder={`Enter your ${label}`}
          className="w-full my-2 bg-tertiary p-4  placeholder:text-secondary rounded-[10px] border-none font-medium outline-none"
          {...register(label, {
            required: true,
            pattern:
              label === "email"
                ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                : null,
          })}
        />
      ) : (
        <textarea
          id={label}
          rows={5}
          name={label}
          placeholder={`Enter your ${label}`}
          className="w-full my-2 bg-tertiary p-4  placeholder:text-secondary rounded-[10px] border-none font-medium outline-none resize-none"
          {...register(label, {
            required: true,
          })}
        />
      )}
    </>
  );
};

export default Input;
