import clsx from "clsx";

type StepProps = {
  step: string;
  message: string;
  disabled?: boolean;
};

const Step: React.FC<StepProps> = ({ step, message, disabled }) => {
  return (
    <div className="flex gap-2 items-center">
      <span
        className={clsx(
          "p-0 px-3 py-1 rounded-full font-bold transition-all ease duration-300",
          disabled ? "bg-zinc-200 text-zinc-500" : "bg-zinc-800 text-white"
        )}
      >
        {step}
      </span>
      <h4
        className={clsx(
          "text-lg font-semibold",
          disabled ? "text-zinc-500" : "text-zinc-800"
        )}
      >
        {message}
      </h4>
    </div>
  );
};

export default Step;
