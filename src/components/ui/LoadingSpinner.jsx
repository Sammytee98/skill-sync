import { memo } from "react";

const LoadingSpinner = ({ size = 50, color = "blue" }) => {
  return (
    <div
      className="border-7 rounded-full animate-spin mx-auto mt-8"
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderTopColor: "gray",
      }}
    >
      <div></div>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.size === nextProps.size && prevProps.color === nextProps.color
  );
};

export default memo(LoadingSpinner, areEqual);
