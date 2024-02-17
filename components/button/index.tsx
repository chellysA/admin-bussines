type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = (props: Props) => {
  const { label, onClick, disabled } = props;
  return (
    <button
      className="linear mt-4 flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Button;
