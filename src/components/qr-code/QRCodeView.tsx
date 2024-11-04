import QRCodeStyling, { FileExtension } from "qr-code-styling";
import Button from "../ui/Button";
import { useEffect, useMemo, useRef } from "react";
import { useQRCode } from "../../contexts/qr-code/context";
import { BiArrowToBottom } from "react-icons/bi";
import clsx from "clsx";

const buttonConfigs = [
  {
    label: "PNG",
    variation: "primary",
    textColorEnabled: "text-blue-500",
    downloadType: "png",
  },
  {
    label: "SVG",
    variation: "dark",
    textColorEnabled: "text-zinc-900",
    downloadType: "svg",
  },
];

const QRCodeView = () => {
  const { state } = useQRCode();
  const ref = useRef<HTMLDivElement | null>(null);

  const qrCode = useMemo(() => new QRCodeStyling(state), [state]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      qrCode.append(currentRef);
    }

    return () => {
      if (currentRef) {
        currentRef.innerHTML = "";
      }
    };
  }, [qrCode]);

  return (
    <>
      <div className="bg-white max-w-[350px] w-full max-h-[350px] h-full rounded-3xl flex justify-center items-center shadow-sm">
        {state.data ? (
          <div ref={ref}></div>
        ) : (
          <img
            src="./src/assets/disabled-qr-code.svg"
            alt="QR Code Placeholder"
            width={state.width}
            height={state.height}
          />
        )}
      </div>
      <div className="flex gap-2 w-full">
        {buttonConfigs.map((config) => (
          <Button
            key={config.label}
            variation={config.variation as "primary" | "dark"}
            disabled={!state.data}
            onClick={() =>
              qrCode.download({
                extension: config.downloadType as FileExtension,
              })
            }
          >
            <span className="bg-white rounded-full p-2">
              <BiArrowToBottom
                size={24}
                className={clsx(
                  !state.data ? "text-zinc-500" : config.textColorEnabled
                )}
              />
            </span>
            <span className="flex flex-col">
              Download <span className="text-xs">{config.label}</span>
            </span>
          </Button>
        ))}
      </div>
    </>
  );
};

export default QRCodeView;
