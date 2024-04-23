export interface IInputProps {
  label?: string;
  id: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  variant?: "auth";
  isError?: boolean;
  isSuccess?: boolean;
  disabled?: boolean;
  value?: string | number | boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
}
