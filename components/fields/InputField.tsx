import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = {
  label?: string;
  id?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  variant?: any;
  isError?: boolean;
  isSuccess?: boolean;
  disabled?: boolean;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

// Custom components
function InputField(props: Props) {
  const {
    label,
    id,
    className = "",
    type,
    placeholder,
    variant,
    isError,
    isSuccess,
    disabled,
    value,
    onChange,
  } = props;

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
      <input
        disabled={disabled}
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        className={`relative ${className} ${
          label ? "mt-2" : "mt-0"
        } flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none duration-300 ${
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
  );
}

export default InputField;
