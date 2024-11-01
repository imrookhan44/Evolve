import React, { useState } from 'react';


interface CustomSliderType {
  min: number,
  max: number,
  defaultValue: number,
  onChange?: (value: number) => void;
}

const CustomSlider = ({ min, max, defaultValue, onChange }: CustomSliderType) => {
  const initialValue = min + (max - min) * 0.2;

  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  console.log(defaultValue)


  const percentage = ((value - min) / (max - min)) * 100;
  const backgroundStyle = `linear-gradient(to right, #6366f1 ${percentage}%, #4b5563 ${percentage}%)`;

  return (
    <div className="w-full max-w-md px-4 py-6">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full h-[4px] rounded-lg appearance-none cursor-pointer bg-gray-600 accent-white"
        style={{
          background: backgroundStyle,
        }}
      />

    </div>
  );
};

export default CustomSlider;