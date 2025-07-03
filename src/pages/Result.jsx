import { useJobStore } from "../store/useJobStore";
import { useNavigate } from "react-router-dom";
import { getJobMatchScore } from "../utils/matchJobsToSkills";
import useResumeStore from "../store/useResumeStore";
import { fetchAllJobs } from "../utils/fetchAllJobs";
import { useCallback, useEffect, useMemo, useState } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import SectionWrapper from "../components/layouts/SectionWrapper";
import Button from "../components/ui/Button";
import { HiArrowRight } from "react-icons/hi2";
import BackButton from "../components/ui/BackButton";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import useGuardStore from "../store/useGuardStore";
import useCachedFetch from "../hooks/useCachedFetch";

const Result = () => {
  const navigate = useNavigate();
  const { jobs, setJobs } = useJobStore();
  const { resumeInsights, resetResume } = useResumeStore();
  const { setShouldShowToast } = useGuardStore();
  const [loading, setLoading] = useState(true);
  const skills = resumeInsights?.skills;
  const { fetchWithCache, clearCache } = useCachedFetch();

  useEffect(() => {
    if (!skills || skills?.length === 0) return;
    let isMounted = true;

    const getJobs = async () => {
      const key = [...skills?.technical].sort().join(","); // Generate a stable key

      try {
        const alljobs = await fetchWithCache(key, fetchAllJobs);

        if (!isMounted) return;

        const matchedJobs = alljobs.map((job) => ({
          ...job,
          match: getJobMatchScore(job, skills),
        }));

        const filteredMatchedJobs = matchedJobs.filter(
          (job) => job.match >= 20
        );
        setTimeout(() => setJobs(filteredMatchedJobs), 1000);
      } catch (err) {
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    getJobs();

    return () => {
      isMounted = false;
    };
  }, [skills, fetchWithCache]);

  const totalMatches = jobs?.length;

  const topMatch = useMemo(() => {
    return jobs.reduce(
      (best, current) => (current.match > best.match ? current : best),
      jobs[0] || null
    );
  }, [jobs]);

  const topSkill = skills?.technical[0] || skills?.soft[0] || "-";

  const handleReset = useCallback(() => {
    clearCache();
    setShouldShowToast(false);
    resetResume();
    setJobs([]);
    navigate("/resume");
    toast.success("Resume data cleared. Ready to start over!", {
      duration: 5000,
    });
  }, [resetResume, clearCache]);

  return (
    <motion.main
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="px-5 py-6"
    >
      <BackButton to="/resume" />

      {loading && <LoadingSpinner color="blue" />}
      {!jobs && !loading && (
        <p className="text-xl text-[rgb(var(--color-muted))] font-medium text-center mt-5">
          No available jobs
        </p>
      )}

      {jobs && !loading && (
        <>
          <SectionWrapper className="max-w-xl text-center space-y-10 text-[rgb(var(--color-text-neutral)] mx-auto">
            <h2 className="text-3xl font-bold">Job Matches Ready</h2>

            <div className="space-y-5 text-lg">
              <p>
                You have{" "}
                <strong className="text-green-500">{totalMatches}</strong> job
                matches based on your resume.
              </p>

              {topMatch && (
                <p>
                  <strong>Best Match:</strong> {topMatch.title} at{" "}
                  {topMatch.company} &mdash;{" "}
                  <strong className="text-green-500">{topMatch.match}%</strong>{" "}
                  match
                </p>
              )}

              <p>
                <strong>Top Skill:</strong> {topSkill}
              </p>
            </div>
          </SectionWrapper>

          <SectionWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Button onClick={() => navigate("jobs")} className="space-x-1.5">
              <span>View Matched Jobs</span> <HiArrowRight />
            </Button>
            <Button
              onClick={handleReset}
              children="Start Over"
              variant="danger"
            />
          </SectionWrapper>
        </>
      )}
    </motion.main>
  );
};

export default Result;
