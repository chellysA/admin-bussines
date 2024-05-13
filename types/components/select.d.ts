export interface ISelectProps {
  id: string;
  options: { label: string; value: string | number }[];
  label?: string;
  disabled?: boolean;
  placeholder: string;
  isError?: boolean;
  error?: string;
  isSuccess?: boolean;
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}
