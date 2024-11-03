import QRCodeStyling from "qr-code-styling";
import Button from "../ui/Button";
import { useEffect, useMemo, useRef } from "react";
import { useQRCode } from "../../contexts/qr-code/context";

const QRCodeViewer = () => {
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
      <Button onClick={() => console.log("Downloading")}>Download</Button>
    </>
  );
};

export default QRCodeViewer;
