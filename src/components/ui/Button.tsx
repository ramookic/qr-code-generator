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
        "flex items-center gap-1 px-5 py-2 bg-blue-500 text-white font-medium rounded-lg transition-all hover:bg-blue-600",
        fit ? "object-fit" : "w-full"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
