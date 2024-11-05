import clsx from "clsx";
import { useState } from "react";
import QRCodeShapeOptions from "./QRCodeShapeOptions";

const options = [
  {
    id: 0,
    title: "Template",
  },
  {
    id: 1,
    title: "Shape",
  },
  {
    id: 2,
    title: "Logo",
  },
];

const QRCodeOptions = () => {
  const [selectedOption, setSelectedOption] = useState("Template");

  return (
    <div>
      <div className="flex gap-2 mt-2">
        {options.map((el) => (
          <button
            onClick={() => setSelectedOption(el.title)}
            className={clsx(
              "font-medium px-4 py-2 text-sm rounded-lg",
              el.title === selectedOption
                ? "bg-blue-50 text-blue-500"
                : " text-zinc-500 hover:bg-blue-50"
            )}
            key={el.id}
          >
            {el.title}
          </button>
        ))}
      </div>
      {selectedOption === "Template" && <div className="pt-4">template</div>}
      {selectedOption === "Shape" && (
        <div className="pt-4">
          <QRCodeShapeOptions />
        </div>
      )}
      {selectedOption === "Logo" && <div className="pt-4">logo</div>}
    </div>
  );
};

export default QRCodeOptions;
