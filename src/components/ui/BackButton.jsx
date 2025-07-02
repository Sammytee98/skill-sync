import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { memo, useCallback } from "react";

const BackButton = ({ to, label = "Back" }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    () => (to ? navigate(to) : navigate(-1)),
    [to]
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center self-start gap-1 text-sm text-[rgb(var(--color-brand))] hover:text-[rgb(var(--color-brand-hover))] transition cursor-pointer"
    >
      <HiArrowLeft className="text-base" />
      {label}
    </button>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.to === nextProps.to && prevProps.label === nextProps.label;
};

export default memo(BackButton, areEqual);
