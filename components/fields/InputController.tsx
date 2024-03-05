import { Control, useController } from "react-hook-form";
import InputField from "./InputField";
import { IInputProps } from "@/types/components/input";

interface InputControllerProps extends IInputProps {
  control: Control<any>
}

const InputController= ({
  variant,
  className,
  label,
  placeholder,
  id,
  type = "text",
  control,
  error,
  isError
}:InputControllerProps) => {
  const { field } = useController({ name: id, control });

  return (
    <InputField
      variant={variant}
      className={className}
      label={label}
      placeholder={placeholder}
      id={id}
      type={type}
      onChange={field.onChange}
      value={field.value}
      error={error}
      isError={isError}
    />
  );
};

export default InputController;
