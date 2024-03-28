"use client";
import { ISelectProps } from "@/types/components/select";
import React, { useState } from "react";

const Select = ({
  id,
  options,
  placeholder,
  disabled,
  label,
  isError,
  error,
  isSuccess,
  className,
  onChange,
  value,
}: ISelectProps) => {
  return (
    <div>
      <div>
        {label && (
          <label
            htmlFor={id}
            className="ml-3 text-sm text-navy-700 dark:text-white font-bold"
          >
            {label}
          </label>
        )}
        <div className={`content-select relative ${label && "mt-2"}`}>
          <select
            id={id}
            defaultValue=""
            value={value}
            onChange={onChange}
            className={`${className} flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none duration-300 ${
              disabled
                ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)] text-white"
                : isError
                  ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                  : isSuccess
                    ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                    : "border-gray-200 dark:border-white/10 focus:border-blueSecondary dark:focus:border-blueSecondary dark:text-white"
            }`}
            disabled={disabled}
          >
            <option
              value=""
              className="options dark:bg-navy-900 text-[17px]"
              disabled
            >
              {placeholder}
            </option>
            {options.map((option, index) => (
              <option
                key={index}
                value={option}
                className="dark:bg-navy-900 bg-white text-[17px]"
              >
                {option}
              </option>
            ))}
          </select>
          <i></i>
        </div>
      </div>
      {isError && (
        <p className="text-red-500 dark:!text-red-400 text-sm">{`* ${error}`}</p>
      )}
    </div>
  );
};

export default Select;
