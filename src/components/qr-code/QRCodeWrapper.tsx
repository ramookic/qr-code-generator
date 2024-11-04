import { useQRCode } from "../../contexts/qr-code/context";
import QRCodeSidebar from "./QRCodeSidebar";

const QRCodeWrapper = () => {
  const { state, handleData } = useQRCode();

  return (
    <div className="bg-white container mx-auto max-h-[80%] h-full rounded-3xl">
      <div className="h-full flex flex-col lg:flex-row justify-between">
        <div className="p-6">
          <input
            type="text"
            placeholder="Enter your data"
            className="px-4 py-2 bg-zinc-100 rounded-xl w-full"
            value={state.data ? state.data : ""}
            onChange={(e) => handleData(e.target.value)}
          />
        </div>
        <QRCodeSidebar />
      </div>
    </div>
  );
};

export default QRCodeWrapper;
