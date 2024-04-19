export interface IInputRadioProps {
  label: string;
  options: { label: string; value: string }[];
  id: string;
  isError?: boolean;
  isSuccess?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  name?: string;
}
