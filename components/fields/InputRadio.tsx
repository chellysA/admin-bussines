import { IInputRadioProps } from "@/types/components/inputRadio";
import React from "react";

const InputRadio = ({
  label,
  options,
  id,
  isError,
  isSuccess,
  disabled,
  onChange,
  error,
  name,
}: IInputRadioProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm text-navy-700 dark:text-white ml-3 font-bold"
      >
        {label}
      </label>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              name={name}
              type="radio"
              value={option.value}
              onChange={onChange}
              disabled={disabled}
              className={`relative ${label ? "mt-2" : "mt-0"} ${
                disabled
                  ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)] text-white"
                  : isError
                    ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                    : isSuccess
                      ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                      : "border-gray-200 dark:border-white/10 focus:border-blueSecondary dark:focus:border-blueSecondary dark:text-white"
              }`}
            />

            {option.label}
          </label>
        </div>
      ))}
      {isError && (
        <p className="text-red-500 dark:!text-red-400 text-sm">{`* ${error}`}</p>
      )}
    </div>
  );
};

export default InputRadio;
