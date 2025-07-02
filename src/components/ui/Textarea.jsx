import { memo } from "react";

const Input = ({ rows = 5, value, onChange, error, ...props }) => {
  return (
    <div className="w-full space-y-1">
      <textarea
        onChange={onChange}
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
const areEqual = (prevProps, nextProps) => {
  const rowsProps = prevProps.rows === nextProps.rows;
  const valueProps = prevProps.value === nextProps.value;
  const onChangeProps = prevProps.onChange === nextProps.onChange;
  const errorProps = prevProps.error === nextProps.error;

  return rowsProps && valueProps && onChangeProps && errorProps;
};

export default memo(Input, areEqual);
