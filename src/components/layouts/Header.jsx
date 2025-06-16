import { motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex justify-between items-center py-2 px-5"
    >
      <Link
        to="/"
        className="text-lg text-[rgb(var(--color-text))] font-extrabold"
      >
        SkillSync
        <span className="text-2xl text-[rgb(var(--color-brand))]">.</span>
      </Link>

      <nav></nav>

      <ThemeToggle />
    </motion.header>
  );
};

export default Header;
