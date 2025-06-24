import useResumeStore from "../../store/useResumeStore";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const ResumeGuard = ({ children }) => {
  const { resumeText, resumeInsights } = useResumeStore();
  const location = useLocation();
  console.log(resumeInsights);
  console.log(resumeText);

  const skills = resumeInsights?.skills;
  const hasSkills = skills?.technical?.length > 0 || skills?.soft?.length > 0;
  const hasResume = resumeText.trim().length > 0 && hasSkills;
  console.log(hasResume);

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!hasResume && !hasShownToast.current) {
      setTimeout(() => {
        toast.error("Please upload your resume first.");
        hasShownToast.current = true;
        setShouldRedirect(true);
      }, 200);
    }
  }, [hasResume]);

  if (shouldRedirect) {
    return <Navigate to="/resume" state={{ from: location }} replace />;
  }

  return children;
};

export default ResumeGuard;
