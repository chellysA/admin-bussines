import { useMemo } from "react";
import { JsxElement } from "typescript";

type Props = {
  label: string | React.ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "full" | "normal";
  className?: string;
  title?: string;
};

const Button = (props: Props) => {
  const {
    label,
    disabled,
    variant = "normal",
    className,
    onClick,
    title,
  } = props;
  const styles = useMemo(() => ({ full: "w-full", normal: "" }), [variant]);

  return (
    <button
      className={`${className} ${styles[variant]} linear flex items-center justify-center rounded-xl bg-brand-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200`}
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      {label}
    </button>
  );
};
export default Button;
