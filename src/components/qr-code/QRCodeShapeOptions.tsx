import { useState } from "react";
import { useQRCode } from "../../contexts/qr-code/context";
import clsx from "clsx";
import { QRCodeState } from "../../contexts/qr-code/types";
import ColorPicker from "../ui/ColorPicker";

const shapes: Array<{ id: number; type: QRCodeState["dotsOptions"]["type"] }> =
  [
    { id: 0, type: "square" },
    { id: 1, type: "classy-rounded" },
    { id: 2, type: "classy" },
    { id: 3, type: "dots" },
    { id: 4, type: "extra-rounded" },
    { id: 5, type: "rounded" },
  ];

const QRCodeShapeOptions = () => {
  const { state, handleDotsType, handleDotsColor, handleBackgroundColor } =
    useQRCode();
  const [selectedShape, setSelectedShape] = useState(state.dotsOptions.type);

  const handleShape = (shape: QRCodeState["dotsOptions"]["type"]) => {
    setSelectedShape(shape);
    handleDotsType(shape);
  };

  return (
    <div className="border border-zinc-200 rounded-2xl p-4 flex flex-col gap-2">
      <h4 className="text-sm font-medium text-zinc-800">Shape Style</h4>
      <div className="flex gap-2">
        {shapes.map((el) => (
          <div
            onClick={() => handleShape(el.type)}
            className={clsx(
              "rounded-lg cursor-pointer",
              selectedShape === el.type ? "bg-blue-50" : "hover:bg-blue-50"
            )}
          >
            <img
              width={72}
              src={`./src/assets/qr-dots/qr-dots-${el.type}.svg`}
            />
          </div>
        ))}
      </div>
      <div className="bg-zinc-100 flex p-4 gap-6 rounded-xl mt-2">
        <div>
          <p className="text-sm text-zinc-800 font-medium mb-2">Dots color</p>
          <ColorPicker
            color={state.dotsOptions.color}
            onChange={handleDotsColor}
          />
        </div>
        <div>
          <p className="text-sm text-zinc-800 font-medium mb-2">
            Background color
          </p>
          <ColorPicker
            color={state.backgroundOptions.color}
            onChange={handleBackgroundColor}
          />
        </div>
      </div>
    </div>
  );
};

export default QRCodeShapeOptions;
