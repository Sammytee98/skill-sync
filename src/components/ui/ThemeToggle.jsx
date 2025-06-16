import useThemeStore from "../../store/useThemeStore";
import { FaSun, FaMoon } from "react-icons/fa6";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-1.5 rounded-full bg-[rgb(var(--color-border))] shadow-md cursor-pointer"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
