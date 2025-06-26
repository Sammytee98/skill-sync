import clsx from "clsx";
import { motion } from "framer-motion";

const Button = ({
  children,
  type = "button",
  className = "",
  variant = "primary",
  onClick,
  ...props
}) => {
  const baseClasses =
    "px-6 py-1.5 rounded-md shadow-md font-chakra font-semibold text-center flex justify-center transition cursor-pointer flex items-center";

  const variants = {
    primary:
      "text-sm bg-[rgb(var(--color-brand))]  hover:bg-[rgb(var(--color-brand-hover))] border-2 border-[rgb(var(--color-brand))] text-white ",
    danger:
      "border-[rgb(var(--color-danger-btn))] border-2 text-[rgb(var(--color-danger-btn))] hover:text-[rgb(var(--color-danger-btn-text))] hover:bg-[rgb(var(--color-danger-btn-bg))] text-sm",
    outline:
      "border-2 border-[rgb(var(--color-outline-btn))] bg-[rgb(var(--color-outline-btn))] text-sm text-[rgb(var(--color-text))]",
  };

  const finalClass = clsx(baseClasses, variants[variant], className);

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      onClick={onClick}
      type={type}
      className={finalClass}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
