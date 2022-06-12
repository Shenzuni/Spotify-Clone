import "assets/css/Range.css"
import React, { useEffect, useState } from "react"

interface RangeProps {
  value: number
  max: number
  onChange?: Function
  onMouseDown?: Function
  onClick?: Function
}

export function Range({
  value,
  max,
  onChange,
  onMouseDown,
  onClick,
}: RangeProps) {
  return (
    <div className="webkit group flex items-center relative w-full h-3">
      <div className="absolute w-[inherit] h-1 rounded-full bg-[#5e5e5e]"></div>
      <div
        className="max-w-full h-1 absolute rounded-full bg-white group-hover:bg-[#1ed760]"
        style={{
          width: (Math.floor(value) / max) * 100 + "%",
        }}
      ></div>
      <input
        className="range absolute w-[calc(12px+100%)] h-1 -translate-x-1.5 appearance-none
          overflow-visible m-0 bg-transparent"
        type="range"
        min="0"
        max={max}
        step="0.2"
        value={Math.floor(value)}
        onChange={(e) => {
          onChange && onChange(e)
        }}
        onMouseDown={(e) => {
          onMouseDown && onMouseDown(e)
        }}
        onClick={(e) => {
          onClick && onClick(e)
        }}
      ></input>
    </div>
  )
}
