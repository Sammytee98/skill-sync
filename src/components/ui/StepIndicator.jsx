const StepIndicator = ({ current, total }) => {
  return (
    <div>
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === current
              ? "bg-[rgb(var(--color-brand))] scale-125"
              : "bg-[rgb(var(--color-border))]"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default StepIndicator;
