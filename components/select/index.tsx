"use client";
import React, { useState } from "react";
type Props = {
  options: string[];
  label: string;
  disabled?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
};
const Select = ({ options, label, disabled, isError, isSuccess }: Props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="content-select relative">
      <select
        value={selectedOption}
        onChange={handleChange}
        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none duration-300 ${
          disabled
            ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
            : isError
            ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            : isSuccess
            ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
            : "border-gray-200 dark:border-white/10 focus:border-blueSecondary dark:focus:border-blueSecondary dark:text-white"
        }`}
      >
        <option value="" className="dark:bg-navy-900 bg-white">
          {label}
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className="dark:bg-navy-900 bg-white"
          >
            {option}
          </option>
        ))}
      </select>
      <i></i>
    </div>
  );
};

export default Select;
