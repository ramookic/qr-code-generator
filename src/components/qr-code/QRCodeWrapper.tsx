import QRCodeViewer from "./QRCodeViewer";

const QRCodeWrapper = () => {
  return (
    <div className="bg-white container mx-auto max-h-[80%] h-full rounded-3xl">
      <div className="h-full flex flex-col lg:flex-row justify-between">
        <div className="p-6"></div>
        <div className="bg-zinc-50 rounded-bl-3xl rounded-br-3xl h-full w-full p-6 lg:max-w-[400px] lg:rounded-tr-3xl lg:rounded-bl-none relative flex flex-col gap-4 items-center">
          <QRCodeViewer />
        </div>
      </div>
    </div>
  );
};

export default QRCodeWrapper;
