import "assets/css/Range.css";
import React, { useEffect, useState } from "react";

interface RangeProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  max: number;
  onChange?: Function;
  onMouseDown?: Function;
  onClick?: Function;
}

export function Range({
  value,
  setValue,
  max,
  onChange,
  onMouseDown,
  onClick,
}: RangeProps) {
  return (
    <div className="range-outer">
      <div className="range-bg"></div>
      <div
        className="range-value"
        style={{
          width: (Math.floor(value) / max) * 100 + "%",
        }}
      ></div>
      <input
        className="range"
        type="range"
        min="0"
        max={max}
        step="0.2"
        value={Math.floor(value)}
        onChange={(e) => {
          onChange && onChange(e);
        }}
        onMouseDown={(e) => {
          onMouseDown && onMouseDown(e);
        }}
        onClick={(e) => {
          onClick && onClick(e);
        }}
      ></input>
    </div>
  );
}
