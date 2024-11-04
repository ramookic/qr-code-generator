import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  fit?: boolean;
  disabled?: boolean;
  variation?: "primary" | "dark";
};

const variations = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  dark: "bg-zinc-900 text-white hover:bg-zinc-800",
  disabled: "bg-zinc-200 text-zinc-500 cursor-not-allowed hover:bg-zinc-200",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  fit,
  disabled,
  variation = "primary",
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center gap-2 pl-0 pr-5 py-3 font-medium rounded-full transition-all",
        disabled ? variations.disabled : variations[variation],
        fit ? "object-fit" : "w-full"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
