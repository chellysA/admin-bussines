type CheckboxProps = {
  id: string;
  className?: string;
  optionsLabel: string;
  disabled?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
};

type LabelWithCheckboxesProps = {
  label: string;
  checkboxes: CheckboxProps[];
  disabled?: boolean;
};

const Checkbox = (props: CheckboxProps) => {
  const { id, className, optionsLabel, disabled, isError, isSuccess } = props;
  return (
    <label
      htmlFor={id}
      className="text-sm text-navy-700 dark:text-white font-bold flex mt-2"
    >
      {optionsLabel && optionsLabel}
      <input
        id={id}
        type="radio"
        className={`ml-2 defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
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
        name="weekly"
        disabled={disabled}
      />
    </label>
  );
};

const LabelWithCheckboxes = (props: LabelWithCheckboxesProps) => {
  const { label, checkboxes, disabled } = props;
  return (
    <div className="ml-2">
      <label className="text-sm text-navy-700 dark:text-white font-bold ml-3">
        {label}
        {checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.id}
            {...checkbox}
            optionsLabel={checkbox.optionsLabel}
            disabled={disabled}
          />
        ))}
      </label>
    </div>
  );
};

export default LabelWithCheckboxes;
