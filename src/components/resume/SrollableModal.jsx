import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import useResumeStore from "../../store/useResumeStore";
import { useResumeActions } from "../../store/useResumeActions";
import { FaX, FaPlus } from "react-icons/fa6";
import { memo, useCallback, useMemo } from "react";

const ScrollableModal = ({ showPreview, setShowPreview }) => {
  const navigate = useNavigate();
  const { resumeInsights } = useResumeStore();
  const { addSkill, removeSkill } = useResumeActions();

  const handleContinue = useCallback(() => {
    setShowPreview(false);
    navigate("result");
  }, []);

  const handleAddSkill = useCallback(
    (type) => {
      const newSkill = prompt(`Enter a new ${type} skill:`);
      if (newSkill) {
        addSkill(type, newSkill.trim().toLowerCase());
      }

      return;
    },
    [addSkill]
  );

  const summary = resumeInsights?.summary;
  const technical = resumeInsights?.skills?.technical;
  const soft = resumeInsights?.skills?.soft;

  return (
    <>
      {showPreview && resumeInsights && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center"
        >
          <div className="bg-[rgb(var(--color-modal))] w-[90%] max-w-2xl max-h-[85svh] p-6 rounded-xl shadow-3xl overflow-y-auto space-y-6">
            <h2 className="text-xl text-center font-bold">
              Etracted Resume Insights
            </h2>

            <div>
              <h3 className="font-semibold">Summary</h3>
              <p className="text-sm mt-2 text-[rgb(var(--color-text-neutral))]">
                {summary}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Technical Skills</h3>

              <div className="flex flex-wrap gap-2">
                {technical.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[rgb(var(--color-tech-skills-bg))] text-[rgb(var(--color-tech-skills-text))] rounded-full text-sm"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkill("technical", skill)}
                      className="text-red-600 hover:text-red-800 transition ml-2 cursor-pointer"
                    >
                      <FaX className="w-2 h-2" />
                    </button>
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleAddSkill("technical")}
                type="button"
                className="flex items-center text-xs bg-[rgb(var(--color-outline-button))] px-3 py-1 rounded-full cursor-pointer"
              >
                Add Skill <FaPlus className="w-3 h-3 ml-2" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {soft.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[rgb(var(--color-soft-skills-bg))] text-[rgb(--color-soft-skills-text)] rounded-full text-sm"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkill("soft", skill)}
                      className="text-red-600 hover:text-red-800 transition ml-2 cursor-pointer"
                    >
                      <FaX className="w-2 h-2" />
                    </button>
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleAddSkill("soft")}
                type="button"
                className="flex items-center text-xs bg-[rgb(var(--color-outline-button))] px-3 py-1 rounded-full cursor-pointer"
              >
                Add Skill <FaPlus className="w-3 h-3 ml-2" />
              </button>
            </div>

            <div className="flex justify-end gap-4 mt-10">
              <Button
                onClick={() => setShowPreview(false)}
                variant="outline"
                children="Back"
              />
              <Button onClick={handleContinue} children="Continue" />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.showPreview === nextProps.showPreview &&
    prevProps.setShowPreview === nextProps.setShowPreview
  );
};

export default memo(ScrollableModal, areEqual);
