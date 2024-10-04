import React, { useState } from "react";

// Function to convert RGB to Hex
const rgbToHex = (r: number, g: number, b: number): string => {
  const componentToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

const ColorConverter: React.FC = () => {
  const [r, setR] = useState<number>(0);
  const [g, setG] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [hex, setHex] = useState<string>("#000000");
  const [copied, setCopied] = useState<boolean>(false);

  // Function to handle the color conversion
  const handleConvert = () => {
    setHex(rgbToHex(r, g, b));
    setCopied(false);  // Reset copy state when color changes
  };

  // Function to copy hex code to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-5">
      <h1 className="text-3xl font-bold">RGB to Hex Converter</h1>
      <div className="flex space-x-4">
        {/* Red Input */}
        <div className="flex flex-col">
          <label>Red (R):</label>
          <input
            type="number"
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            min="0"
            max="255"
            className="border p-2 rounded-md"
          />
        </div>
        {/* Green Input */}
        <div className="flex flex-col">
          <label>Green (G):</label>
          <input
            type="number"
            value={g}
            onChange={(e) => setG(Number(e.target.value))}
            min="0"
            max="255"
            className="border p-2 rounded-md"
          />
        </div>
        {/* Blue Input */}
        <div className="flex flex-col">
          <label>Blue (B):</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            min="0"
            max="255"
            className="border p-2 rounded-md"
          />
        </div>
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConvert}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Convert to Hex
      </button>

      {/* Display Hex Code and Copy Icon */}
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-semibold">Hex Code: {hex}</h2>

        {/* Copy Icon */}
        <button
          onClick={handleCopy}
          className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
        >
          {/* You can use a simple clipboard icon or emoji */}
          📋
        </button>
      </div>

      {/* Copy Confirmation Message */}
      {copied && <p className="text-green-500">Copied to clipboard!</p>}

      {/* Color Preview */}
      <div
        className="w-20 h-20 mt-4"
        style={{ backgroundColor: hex }}
      ></div>
    </div>
  );
};

export default ColorConverter;
