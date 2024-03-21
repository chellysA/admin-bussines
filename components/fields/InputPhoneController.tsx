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
}

const InputPhoneController = ({
  id,
  label,
  control,
  isError,
  error,
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
          country={"ve"}
          value={field.value}
          onChange={field.onChange}
          buttonStyle={{
            backgroundColor: "#ffffff00",
            borderRadius: "10px",
            borderColor: "#feffff1a",
            borderWidth: "1px",
          }}
          inputStyle={{
            backgroundColor: "#ffffff00",
            borderColor: isError ? "#f87171" : "#feffff1a",
            borderWidth: "1px",
            borderRadius: "10px",
            width: "100%",
            height: "48px",
            color: "#ffffff",
          }}
          containerClass="inputPhone"
          dropdownStyle={{
            backgroundColor: "#0b1437",
          }}
          containerStyle={{
            width: "100%",
            height: "48px",
            marginTop: "12px",
          }}
        />
      </div>
      {isError && (
        <p className="text-red-500 dark:!text-red-400 text-sm">{`* ${error}`}</p>
      )}
    </div>
  );
};

export default InputPhoneController;
