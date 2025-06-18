const StepIndicator = ({ current, total }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i === current
              ? "bg-[rgb(var(--color-brand))] scale-125"
              : "bg-[rgb(var(--color-border))]"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default StepIndicator;
