import { useQRCode } from "../../contexts/qr-code/context";
import Step from "../ui/Step";
import QRCodeSidebar from "./QRCodeSidebar";

const QRCodeWrapper = () => {
  const { state, handleData } = useQRCode();

  return (
    <div className="bg-white rounded-3xl lg:max-h-[800px] max-w-[1200px] w-full h-full">
      <div className="h-full flex flex-col lg:flex-row justify-between">
        <div className="p-6 w-full flex flex-col gap-4">
          <Step step="1" message="Complete the content" />
          <label className="text-sm text-zinc-500 font-medium">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={4}
            required
            placeholder="Enter some text..."
            className="px-4 py-2 bg-zinc-100 rounded-xl w-full resize-none outline-none"
            value={state.data ? state.data : ""}
            onChange={(e) => handleData(e.target.value)}
          />
          <div className="border-t-[1px] border-zinc-200"></div>
          <Step step="2" message="Design your QR" />
        </div>
        <QRCodeSidebar />
      </div>
    </div>
  );
};

export default QRCodeWrapper;
