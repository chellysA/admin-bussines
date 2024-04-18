import { useMemo } from "react";

type Props = {
  label: string | React.ReactElement | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "full" | "normal";
  className?: string;
  secondaryButton?: boolean;
  title?: string;
  type?: "submit" | "reset" | "button";
};

const Button = (props: Props) => {
  const {
    label,
    disabled,
    variant = "normal",
    secondaryButton = false,
    className,
    onClick,
    title,
    type = "button",
  } = props;

  const styles = useMemo(() => ({ full: "w-full", normal: "" }), []);

  return (
    <button
      className={`${className} ${styles[variant]} ${secondaryButton && "bg-transparent dark:bg-transparent border-2 border-brand-300"} linear flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200`}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
    >
      {label}
    </button>
  );
};
export default Button;
