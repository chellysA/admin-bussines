export interface ISelectProps {
  id: string;
  options: string[] | number[];
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
