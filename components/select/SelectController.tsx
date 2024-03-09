import { ISelectProps } from "@/types/components/select";
import Select from "./index";
import { Control, useController } from "react-hook-form";

interface ISelectControllerProps extends ISelectProps {
  control: Control<any>;
}

const SelectController = ({
  id,
  options,
  label,
  disabled,
  isError,
  isSuccess,
  onChange,
  control,
  error,
}: ISelectControllerProps) => {
  const { field } = useController({ name: id, control });

  return (
    <Select
      id={id}
      options={options}
      label={label}
      disabled={disabled}
      isError={isError}
      isSuccess={isSuccess}
      onChange={field.onChange}
      error={error}
    />
  );
};
export default SelectController;
