// Custom components
import React from "react";

type Props = {
  label: string;
  id: string;
  placeholder: string;
  extra: string;
  cols: number;
  rows: number;
  isError: boolean;
  isSuccess: boolean;
  disabled: boolean;
};

function InputField(props: Props) {
  const {
    label,
    id,
    extra,
    placeholder,
    cols,
    rows,
    isError,
    isSuccess,
    disabled,
  } = props;

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className="ml-3 mb-2 text-sm font-bold text-navy-700 dark:text-white"
      >
        {label}
      </label>
      <div>
        <textarea
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          className={`flex w-full items-center justify-center rounded-xl border bg-white/0 pl-3 pt-3 text-sm outline-none ${
            disabled
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : isError
              ? "!border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
              : isSuccess
              ? "!border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
              : disabled
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : "border-gray-200 dark:!border-white/10 dark:text-white"
          }`}
          name={id}
          id={id}
        />
      </div>
    </div>
  );
}

export default InputField;
