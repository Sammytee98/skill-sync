import { useInView, motion } from "framer-motion";
import { memo, useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const year = new Date().getFullYear();

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full text-[rgb(var(--color-muted))] py-4 text-center border-t border-[rgb(var(--color-border))] text-sm"
    >
      <p>&copy; {year} SkillSync. All rights reseverd.</p>
      <p className="mt-1">
        Built by{" "}
        <a
          href="https://github.com/socode-dev?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--color-brand))] font-semibold cursor-pointer"
        >
          Samuel Oso
        </a>
      </p>
    </motion.footer>
  );
};

export default memo(Footer);
