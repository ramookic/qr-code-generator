import QRCodeWrapper from "./components/qr-code/QRCodeWrapper";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-100">
      <div className="container mx-auto flex items-center justify-center h-full">
        <QRCodeWrapper />
      </div>
    </div>
  );
};

export default App;
