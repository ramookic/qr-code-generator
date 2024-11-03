import Button from "../ui/Button";

const currentYear = new Date().getFullYear();

const QRCodeViewer = () => {
  return (
    <>
      <div className="bg-white max-w-[400px] w-full max-h-[400px] h-full rounded-3xl"></div>
      <Button onClick={() => console.log("Downloading")}>Download</Button>
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
    </>
  );
};

export default QRCodeViewer;
