import { Control, useController } from "react-hook-form";
import { IInputProps } from "@/types/components/input";
import Select from "../select";
import { useState } from "react";

interface InputDocumentControllerProps extends IInputProps {
  control: Control<any>;
}

const InputDocumentController = ({
  variant,
  className,
  label,
  placeholder,
  id,
  type = "text",
  control,
  error,
  isError,
  disabled,
  isSuccess,
}: InputDocumentControllerProps) => {
  const { field } = useController({ name: id, control });
  const [selectValue, setSelectValue] = useState("");

  const addPointToValue = (n: string) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleOnChange = (e: any) => {
    if (selectValue !== "J" || "") {
      const numericalValue = e.target.value.replace(/\D/g, "");
      const formattedValue =
        numericalValue === "" ? "" : addPointToValue(numericalValue);
      const formattedResult = {
        ...e,
        target: { ...e.target, value: formattedValue },
      };
      field.onChange(formattedResult);
    } else {
      field.onChange(e);
    }
  };

  return (
    <div className={className}>
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
      <div className={`flex ${label ? "mt-2" : "mt-0"}`}>
        <div className="w-[120px] mr-2">
          <Select
            id={id}
            options={["J", "Ve", "Ex"]}
            placeholder="Tipo"
            disabled={disabled}
            onChange={(e) => setSelectValue(e)}
          />
        </div>
        <input
          disabled={disabled}
          type={type}
          value={field.value}
          onChange={handleOnChange}
          id={id}
          placeholder={placeholder}
          className={`relative ${className} flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none duration-300 ${
            disabled
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : isError
                ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                : isSuccess
                  ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                  : "border-gray-200 dark:border-white/10 focus:border-blueSecondary dark:focus:border-blueSecondary dark:text-white"
          }`}
        />
      </div>
      {isError && (
        <p className="text-red-500 dark:!text-red-400 text-sm">{`* ${error}`}</p>
      )}
    </div>
  );
};

export default InputDocumentController;
