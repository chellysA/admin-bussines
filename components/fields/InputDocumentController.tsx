import { Control, useController } from "react-hook-form";
import { IInputProps } from "@/types/components/input";
import Select from "../select";
import { useState } from "react";
import InputField from "./InputField";

interface InputDocumentControllerProps extends IInputProps {
  control: Control<any>;
  idType: string;
  errorType?: string;
  isErrorType?: boolean;
}

const InputDocumentController = ({
  variant,
  className,
  label,
  placeholder,
  id,
  idType,
  type = "text",
  control,
  error,
  isError,
  disabled,
  isErrorType,
  errorType,
}: InputDocumentControllerProps) => {
  const { field: inputField } = useController({ name: id, control });
  const { field: selectField } = useController({ name: idType, control });

  const [selectValue, setSelectValue] = useState("");

  const addPointToValue = (n: string) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleOnChange = (e: any) => {
    if (selectField.value !== "J" || "") {
      const numericalValue = e.target.value.replace(/\D/g, "");
      const formattedValue =
        numericalValue === "" ? "" : addPointToValue(numericalValue);
      const formattedResult = {
        ...e,
        target: { ...e.target, value: formattedValue },
      };
      inputField.onChange(formattedResult);
    } else {
      inputField.onChange(e);
    }
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`text-sm text-navy-700 dark:text-white ${
            variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
          }`}
        >
          {label}
        </label>
      )}

      <div className="flex mt-2">
        <Select
          id={idType}
          options={["J", "V", "E"]}
          placeholder="Tipo"
          disabled={disabled}
          onChange={selectField.onChange}
          className="w-[110px] mr-2"
          isError={isErrorType}
          error={errorType}
        />
        <InputField
          id={id}
          disabled={disabled}
          type={type}
          value={inputField.value}
          onChange={handleOnChange}
          placeholder={placeholder}
          isError={isError}
          error={error}
        />
      </div>
    </div>
  );
};

export default InputDocumentController;
