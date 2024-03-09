import { CheckboxProps } from "./checkbox";

export interface ICheckboxWithLabelProps {
  id: string;
  label: string;
  checkboxes: CheckboxProps[];
  disabled?: boolean;
  value?: string;
  isError?: boolean;
  error?: string;
}
