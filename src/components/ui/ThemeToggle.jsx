import useThemeStore from "../../store/useThemeStore";
import { FaSun, FaMoon } from "react-icons/fa6";
import { motion } from "framer-motion";
import { memo, useCallback, useMemo } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  const FaIcon = theme === "light" ? FaMoon : FaSun;

  const handleThemeToggle = useCallback(() => toggleTheme(), [toggleTheme]);

  return (
    <button
      type="button"
      onClick={handleThemeToggle}
      className="p-1 rounded-full bg-[rgb(var(--color-border))] shadow-md cursor-pointer"
    >
      <motion.span
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-xs"
      >
        <FaIcon />
      </motion.span>
    </button>
  );
};

export default memo(ThemeToggle);
