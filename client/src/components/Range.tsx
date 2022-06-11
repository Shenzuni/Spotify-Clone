import "assets/css/Range.css";
import React, { useEffect, useState } from "react";

interface RangeProps {
  max: number;
  initialValue: number;
  onChange?: Function;
  onMouseDown?: Function;
  onMouseUp?: Function;
}

export function Range({
  max,
  initialValue,
  onChange,
  onMouseDown,
  onMouseUp,
}: RangeProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div className="range-outer">
      <div className="range-bg"></div>
      <div
        className="range-value"
        style={{
          width: (value / max) * 100 + "%",
        }}
      ></div>
      <input
        className="range"
        type="range"
        min="0"
        max={max}
        step="1"
        value={value}
        onChange={(e) => {
          setValue(e.target.valueAsNumber);
          onChange && onChange(e);
        }}
        onMouseDown={(e) => {
          onMouseDown && onMouseDown(e);
        }}
        onMouseUp={(e) => {
          onMouseUp && onMouseUp(e);
        }}
      ></input>
    </div>
  );
}
