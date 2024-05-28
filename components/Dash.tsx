import React from "react";

const Dash: React.FC<{
  width?: string;
  height?: string;
  color?: string;
  dashArray?: string;
  className?: string; // Explicitly typing className as a string
}> = ({
  width = "100%",
  height = "8px",
  color = "#ACB3BF",
  dashArray = "15,15",
  className,
}) => {
  return (
    <div className={className} style={{ width, overflow: "hidden" }}>
      <svg width="100%" height={height} xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke={color}
          strokeWidth={height}
          strokeDasharray={dashArray}
        />
      </svg>
    </div>
  );
};

export default Dash;
