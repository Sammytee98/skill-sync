const Input = ({ label, id, rows = 5, value, onChange, error, ...props }) => {
  return (
    <div className="w-full space-y-1">
      {label && (
        <label htmlFor={id} className="text base font-medium block">
          {label}
        </label>
      )}

      <textarea
        onChange={onChange}
        id={id}
        rows={rows}
        value={value}
        className={`w-full px-4 py-2 border-[rgb(var(--color-border))] text-base resize-none rounded-md shadow-sm border-2 outline-none transition-all duration-200 ${
          error
            ? "border-red-500"
            : "border-transparent focus:border-[rgb(var(--color-brand))]"
        }`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
