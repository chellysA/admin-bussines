import { Control, useController } from "react-hook-form";
import InputRadio from "./InputRadio";
import { CheckboxProps } from "@/types/components/checkbox";
import { IInputRadioProps } from "@/types/components/inputRadio";

interface InputRadioControllerProps extends IInputRadioProps {
  control: Control<any>;
}

const InputRadioController = ({
  id,
  error,
  isError,
  disabled,
  options,
  control,
  name,
  label,
}: InputRadioControllerProps) => {
  const { field } = useController({ name: id, control });

  return (
    <InputRadio
      name={name}
      options={options}
      onChange={field.onChange}
      id={id}
      error={error}
      isError={isError}
      disabled={disabled}
      label={label}
    />
  );
};

export default InputRadioController;
