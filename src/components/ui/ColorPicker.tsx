import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type ColorPickerProps = {
  color: string;
  onChange: (value: string) => void;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const handleColorChange = (color: string) => {
    onChange(color);
  };

  return (
    <div className="relative border border-zinc-200 rounded-lg">
      <div className="flex">
        <input
          className="max-w-[100px] pl-4 py-2 rounded-tl-lg rounded-bl-lg text-sm text-zinc-800 font-medium outline-none border-none"
          type="text"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <button
          style={{ backgroundColor: color }}
          className={
            "w-[36px] h-[36px] rounded-tr-lg rounded-br-lg border-l border-l-zinc-200"
          }
          onClick={() => setIsOpen(!isOpen)}
        ></button>
      </div>
      {isOpen && (
        <div ref={ref} className="absolute bottom-10 z-50">
          <HexColorPicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
