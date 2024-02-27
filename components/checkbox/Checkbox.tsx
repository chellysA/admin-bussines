type Props = {
  id?: string;
  className?: string;
};

const Checkbox = (props: Props) => {
  const { id, className } = props;
  return (
    <input
      id={id}
      type="checkbox"
      className={`defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
      justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
      checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:border-none checked:bg-indigo-500 dark:checked:bg-indigo-400 ${className}`}
      name="weekly"
    />
  );
};

export default Checkbox;
