import React from "react";

const DashedLine: React.FC<{
  width?: string;
  height?: string;
  color?: string;
  dashArray?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
}> = ({
  width = "100%",
  height = "3px",
  color = "#ACB3BF",
  dashArray = "10,22",
  orientation = "horizontal",
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        width: orientation === "horizontal" ? width : height,
        height: orientation === "horizontal" ? height : width,
        overflow: "hidden",
      }}
    >
      <svg
        width={orientation === "horizontal" ? "100%" : height}
        height={orientation === "horizontal" ? height : "100%"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="0"
          x2={orientation === "horizontal" ? "100%" : "0"}
          y2={orientation === "horizontal" ? "0" : "100%"}
          stroke={color}
          strokeWidth={orientation === "horizontal" ? height : width}
          strokeDasharray={dashArray}
        />
      </svg>
    </div>
  );
};

export default DashedLine;
