import { Control, useController } from "react-hook-form";
import { IInputProps } from "@/types/components/input";
import Select from "../select";
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
        <div className="mr-2">
          <Select
            id={idType}
            options={[
              { label: "J", value: "J" },
              { label: "V", value: "V" },
              { label: "E", value: "E" },
            ]}
            placeholder="Tipo"
            disabled={disabled}
            value={selectField.value}
            onChange={selectField.onChange}
            className={`min-w-[80px] w-[90px] ${disabled ? "mr-0 text-center" : "mr-2"}`}
            isError={isErrorType}
            error={errorType}
          />
        </div>
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
