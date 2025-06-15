import { motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex justify-between items-center px-5"
    >
      <span>Header</span>
      <ThemeToggle />
    </motion.header>
  );
};

export default Header;
