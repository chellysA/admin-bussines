import { IInputProps } from "@/types/components/input";
interface IRadioProps extends IInputProps {
  name: string | undefined;
}

const Radio = (props: IRadioProps) => {
  const { id, name, value, onChange, disabled, className, isError, isSuccess } =
    props;

  return (
    <input
      id={id}
      name={name}
      type="radio"
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`${className} before:contet[""] relative h-5 w-5 cursor-pointer appearance-none rounded-full
       border !border-gray-300 transition-all duration-[0.2s] before:absolute before:top-[3px]
       before:left-[50%] before:h-3 before:w-3 before:translate-x-[-50%] before:rounded-full before:transition-all before:duration-[0.2s] dark:!border-gray-800 checked:!border-indigo-500 checked:before:!bg-indigo-500 dark:checked:!border-indigo-400 dark:checked:before:!bg-indigo-400 ${
         disabled
           ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)] text-white"
           : isError
             ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
             : isSuccess
               ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
               : "border-gray-200 dark:border-white/10 focus:border-blueSecondary dark:focus:border-blueSecondary dark:text-white"
       }`}
    />
  );
};

export default Radio;
