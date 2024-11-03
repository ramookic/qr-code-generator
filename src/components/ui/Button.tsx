import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  fit?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, fit }) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-1 px-5 py-3 bg-blue-500 text-white font-medium rounded-full transition-all hover:bg-blue-600",
        fit ? "object-fit" : "w-full"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
