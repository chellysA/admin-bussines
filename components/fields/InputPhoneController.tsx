import React from "react";
import { Control, useController } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IInputPhoneProps {
  id: string;
  label: string;
  control: Control<any>;
  isError: boolean;
  error: string | undefined;
  disabled?: boolean;
}

const InputPhoneController = ({
  id,
  label,
  control,
  isError,
  error,
  disabled = false,
}: IInputPhoneProps) => {
  const { field } = useController({ name: id, control });

  return (
    <div>
      {label && (
        <p
          className="text-sm text-navy-700 dark:text-white
            ml-3 font-bold"
        >
          {label}
        </p>
      )}
      <div>
        <PhoneInput
          disabled={disabled}
          country={"ve"}
          disableCountryGuess
          disableDropdown
          placeholder=""
          value={field.value}
          onChange={field.onChange}
          buttonClass="!bg-transparent !border-transparent"
          dropdownClass="!bg-[#0b1437] text-white"
          inputClass={`${disabled && "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"} !bg-transparent border !border-white/10 !w-full !h-[48px] !rounded-[12px] text-white ${isError && "!border-red-400"}`}
          containerClass={`inputPhone mt-3 `}
        />
      </div>
      {isError && (
        <p className="text-red-500 dark:!text-red-400 text-sm">{`* ${error}`}</p>
      )}
    </div>
  );
};

export default InputPhoneController;
