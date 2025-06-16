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
    "px-6 py-2 rounded-md shadow-md font-chakra font-semibold text-center flex justify-center transition cursor-pointer flex items-center border-2";

  const variants = {
    primary:
      "text-sm bg-[rgb(var(--color-brand))] border-[rgb(var(--color-brand))] hover:bg-[rgb(var(--color-brand-light))] hover:border-[rgb(var(--color-brand-light))] text-white ",
    outline:
      "bg-white border-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-text))] text-[rgb(var(--color-text))] hover:text-white text-sm",
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
