type Props = {
  id?: string;
  name?: string;
};

const Radio = (props: Props) => {
  const { id, name } = props;

  return (
    <input
      id={id}
      name={name}
      type="radio"
      className={`before:contet[""] relative h-5 w-5 cursor-pointer appearance-none rounded-full
       border !border-gray-300 transition-all duration-[0.2s] before:absolute before:top-[3px]
       before:left-[50%] before:h-3 before:w-3 before:translate-x-[-50%] before:rounded-full before:transition-all before:duration-[0.2s] dark:!border-gray-800 checked:!border-indigo-500 checked:before:!bg-indigo-500 dark:checked:!border-indigo-400 dark:checked:before:!bg-indigo-400`}
    />
  );
};

export default Radio;
