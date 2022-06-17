import "./styles.css"

interface RangeProps {
  value: number
  max: number
  steps: number
  onChange?: Function
  onMouseDown?: Function
  onClick?: Function
}

export function Range({
  value,
  max,
  steps,
  onChange,
  onMouseDown,
  onClick,
}: RangeProps) {
  return (
    <div className="outer-webkit-range flex items-center relative w-full h-3">
      <div className="absolute w-[inherit] h-1 rounded-full bg-[#5e5e5e]"></div>
      <div
        className="webkit-range-progress max-w-full h-1 absolute rounded-full bg-white"
        style={{
          width: (Math.floor(value) / max) * 100 + "%",
        }}
      />
      <input
        className="webkit-range absolute w-[calc(12px+100%)] h-1 -translate-x-1.5 appearance-none
          overflow-visible m-0 bg-transparent"
        type="range"
        min="0"
        max={max}
        step={steps}
        value={Math.floor(value)}
        onChange={(e) => {
          onChange && onChange(e.target.valueAsNumber)
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
