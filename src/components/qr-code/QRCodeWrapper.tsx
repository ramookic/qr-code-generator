import QRCodeSidebar from "./QRCodeSidebar";

const QRCodeWrapper = () => {
  return (
    <div className="bg-white container mx-auto max-h-[80%] h-full rounded-3xl">
      <div className="h-full flex flex-col lg:flex-row justify-between">
        <div className="p-6"></div>
        <QRCodeSidebar />
      </div>
    </div>
  );
};

export default QRCodeWrapper;
