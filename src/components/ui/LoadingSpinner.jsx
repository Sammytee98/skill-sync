import { motion } from "framer-motion";

const spinnerVariants = {
  spin: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 0.8,
      ease: "linear",
    },
  },
};

const LoadingSpinner = ({ size = 25, color = "orange" }) => {
  return (
    <motion.div
      className="border-5 rounded-full"
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderTopColor: "transparent",
      }}
      variants={spinnerVariants}
      animate="spin"
    >
      <div></div>
    </motion.div>
  );
};

export default LoadingSpinner;
