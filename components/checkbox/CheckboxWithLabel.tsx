import { CheckboxProps } from "@/types/components/checkbox";
import { ICheckboxWithLabelProps } from "@/types/components/checkboxWithLabel";

const Checkbox = (props: CheckboxProps) => {
  const {
    id,
    className,
    optionsLabel,
    disabled,
    isError,
    isSuccess,
    value,
    name,
  } = props;
  return (
    <div className="flex mt-2">
      <input
        id={id}
        value={value}
        name={name}
        type="radio"
        className={`mr-2 defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
          justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
          checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:border-none checked:bg-indigo-500 dark:checked:bg-indigo-400 ${
            disabled
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : isError
                ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                : isSuccess
                  ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                  : "border-gray-200 dark:border-white/10 focus:border-blueSecondary dark:focus:border-blueSecondary dark:text-white"
          } ${className}`}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className="text-sm text-navy-700 dark:text-white font-bold"
      >
        {optionsLabel && optionsLabel}
      </label>
    </div>
  );
};

const LabelWithCheckboxes = (props: ICheckboxWithLabelProps) => {
  const { id, label, checkboxes, disabled, value, isError, error } = props;
  return (
    <div className="ml-2">
      <label className="text-sm text-navy-700 dark:text-white font-bold ml-3">
        {label}
        {checkboxes.map((checkbox) => (
          <Checkbox
            id={id}
            key={checkbox.id}
            optionsLabel={checkbox.optionsLabel}
            disabled={disabled}
            value={value}
            isError={isError}
            error={error}
            name={checkbox.name}
          />
        ))}
      </label>
      {isError && (
        <p className="text-red-500 dark:!text-red-400 text-sm">{`* ${error}`}</p>
      )}
    </div>
  );
};

export default LabelWithCheckboxes;
