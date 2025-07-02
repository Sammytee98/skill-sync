import useResumeStore from "../../store/useResumeStore";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import useGuardStore from "../../store/useGuardStore";

const ResumeGuard = ({ children }) => {
  const { resumeText, resumeInsights } = useResumeStore();
  const { shouldShowToast, setShouldShowToast } = useGuardStore();
  const location = useLocation();

  const skills = resumeInsights?.skills;
  const hasSkills = skills?.technical?.length > 0 || skills?.soft?.length > 0;
  const hasResume = resumeText?.trim().length > 0 && hasSkills;

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!hasShownToast.current && !hasResume) {
      setShouldRedirect(true);
      setShouldShowToast(true);
      hasShownToast.current = true;
    }
  }, [hasResume]);

  useEffect(() => {
    if (shouldShowToast) {
      toast.error("Please upload your resume first.", { duration: 5000 });
      setShouldShowToast(false);
    }
  }, [shouldShowToast]);

  if (shouldRedirect) {
    return <Navigate to="/resume" state={{ from: location }} replace />;
  }

  return children;
};

export default ResumeGuard;
