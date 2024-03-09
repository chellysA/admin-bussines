import { ICheckboxWithLabelProps } from "@/types/components/checkboxWithLabel";
import Checkbox from "./CheckboxWithLabel";
import { Control, useController } from "react-hook-form";

interface ICheckboxControllerProps extends ICheckboxWithLabelProps {
  control: Control<any>;
}

const CheckboxController = ({
  id,
  label,
  checkboxes,
  disabled,
  control,
  isError,
  error,
}: ICheckboxControllerProps) => {
  const { field } = useController({ name: id, control });
  return (
    <Checkbox
      id={id}
      label={label}
      checkboxes={checkboxes}
      disabled={disabled}
      value={field.value}
      isError={isError}
      error={error}
    />
  );
};
export default CheckboxController;
