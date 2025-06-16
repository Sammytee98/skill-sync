import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import AiIllustrator from "../../assets/ai-illustrator.jpeg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold leading-tight">
          Instantly See How Well You Match a Job
        </h1>
        <p className="text-base text-[rgb(var(--color-muted))] leading-relaxed">
          Paste your resume and a job description &mdash; SkillSync compares
          then using AI to find your strengths and gaps. Know exactly where you
          stand.
        </p>
        <Button onClick={() => navigate("/resume")} children="Start Matching" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full h-full rounded-full"
      >
        <img
          src={AiIllustrator}
          alt="Ai reveiwing resume with magnifying glass"
          className="w-full h-auto object-contains rounded-full"
        />
      </motion.div>
    </>
  );
};

export default Hero;
