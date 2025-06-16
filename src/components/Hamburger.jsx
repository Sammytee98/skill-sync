import { motion } from "framer-motion";

const Hamburger = ({ isMenuOpen }) => {
  return (
    <>
      <motion.span
        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="block w-5 h-[4px] bg-[rgb(var(--color-muted))] group-hover:bg-[rgb(var(--color-brand))] rounded origin-center"
      />
      <motion.span
        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="block w-5 h-[4px] bg-[rgb(var(--color-muted))] group-hover:bg-[rgb(var(--color-brand))] rounded"
      />
      <motion.span
        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="block w-5 h-[4px] bg-[rgb(var(--color-muted))] group-hover:bg-[rgb(var(--color-brand))] rounded origin-center"
      />
    </>
  );
};

export default Hamburger;
