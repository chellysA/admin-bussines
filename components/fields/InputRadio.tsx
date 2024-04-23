import { IInputRadioProps } from "@/types/components/inputRadio";
import React from "react";
import Radio from "../radio";

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
        <div key={index} className="flex items-center mt-2">
          <Radio
            id={id}
            name={name}
            value={option.value}
            onChange={onChange}
            disabled={disabled}
            className={`relative ${label ? "mr-2" : "mt-0"}`}
          />
          <label className="text-sm dark:text-white">{option.label}</label>{" "}
        </div>
      ))}
      {isError && (
        <p className="text-red-500 dark:!text-red-400 text-sm">{`* ${error}`}</p>
      )}
    </div>
  );
};

export default InputRadio;
