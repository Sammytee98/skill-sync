import useResumeStore from "../../store/useResumeStore";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const ResumeGuard = ({ children }) => {
  const { resumeText, resumeInsight } = useResumeStore();
  const { skills } = resumeInsight;
  const location = useLocation();

  const hasResume =
    resumeText.trim() > 0 ||
    skills.technical.length > 0 ||
    skills.soft.length > 0;

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!hasResume && !hasShownToast.current) {
      toast.error("Please upload your resume first.");
      hasShownToast.current = true;
      setShouldRedirect(true);
    }
  }, [hasResume]);

  if (shouldRedirect) {
    return <Navigate to="\resume" state={{ from: location }} replace />;
  }

  return children;
};

export default ResumeGuard;
