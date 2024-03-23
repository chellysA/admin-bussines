export interface ISelectProps {
  id: string;
  options: string[] | number[];
  label?: string;
  disabled?: boolean;
  placeholder: string;
  isError?: boolean;
  error?: string;
  isSuccess?: boolean;
  onChange?: (value: string) => void;
}
