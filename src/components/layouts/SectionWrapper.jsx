import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionWrapper = ({ className = "", children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-12 px-4 sm:px-6 lg:px-16 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
