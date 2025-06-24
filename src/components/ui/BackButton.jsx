import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

const BackButton = ({ to, label = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className="flex items-center self-start gap-1 text-sm text-[rgb(var(--color-brand))] hover:text-[rgb(var(--color-brand-hover))] transition cursor-pointer"
    >
      <HiArrowLeft className="text-base" />
      {label}
    </button>
  );
};

export default BackButton;
