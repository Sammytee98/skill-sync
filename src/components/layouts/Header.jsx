import { motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useState, useEffect, useCallback } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import useWindowSize from "../../hooks/useWindowSize.js";

const Header = () => {
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLink = [
    { label: "Home", path: "/" },
    { label: "Get Started", path: "/resume" },
  ];

  const toggleMenu = useCallback(
    () => setIsMenuOpen((prev) => !prev),
    [isMenuOpen]
  );
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    width > 768 && setIsMenuOpen(false);
  }, [width, isMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[rgb(var(--color-bg))] shadow-md px-5 md:px-10 py-2"
    >
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-xl text-[rgb(var(--color-text))] font-extrabold"
        >
          SkillSync
          <span className="text-2xl text-[rgb(var(--color-brand))]">.</span>
        </Link>

        <nav className="hidden md:flex space-x-5 text-sm font-medium">
          <NavBar navLink={navLink} />
        </nav>

        <div className="flex items-center gap-5 tablet:gap-8">
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <HiX size={25} /> : <HiOutlineMenu size={26} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.nav
          onClick={closeMenu}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:hidden mt-3 flex flex-col space-y-3 text-sm font-medium absolute top-8 left-0 right-0 z-50 bg-[rgb(var(--color-bg))] py-4 px-10"
        >
          <NavBar navLink={navLink} />
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
