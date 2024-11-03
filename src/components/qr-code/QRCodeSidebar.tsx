import QRCodeViewer from "./QRCodeViewer";

const currentYear = new Date().getFullYear();

const QRCodeSidebar = () => {
  return (
    <div className="bg-zinc-50 rounded-bl-3xl rounded-br-3xl h-full w-full p-6 lg:max-w-[400px] lg:rounded-tr-3xl lg:rounded-bl-none relative flex flex-col gap-4 items-center">
      <QRCodeViewer />
      <p className="text-zinc-600 font-medium text-sm absolute bottom-4 ">
        {currentYear}. QR Code Generator by{" "}
        <a
          className="text-zinc-800 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ramookic"
        >
          Ramo Okić
        </a>
      </p>
    </div>
  );
};

export default QRCodeSidebar;
