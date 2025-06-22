import { useJobStore } from "../store/useJobStore";
import { getJobMatchScore } from "../utils/matchJobsToSkills";
import useResumeStore from "../store/useResumeStore";
import { fetchAllJobs } from "../utils/fetchAllJobs";
import JobCard from "../components/job/JobCard";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { motion } from "framer-motion";

const JobInput = () => {
  const { jobs, setJobs } = useJobStore();
  const { resumeInsights } = useResumeStore();
  const { skills } = resumeInsights;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      const alljobs = await fetchAllJobs();

      const matchedJobs = alljobs.map((job) => ({
        ...job,
        match: getJobMatchScore(job, skills),
      }));

      const filteredMatchedJobs = matchedJobs.filter((job) => job.match >= 20);
      setTimeout(() => {
        setJobs(filteredMatchedJobs);
        setLoading(false);
      }, 3000);
    };

    getJobs();
  }, [skills]);
  console.log(jobs);

  return (
    <main className="space-y-14 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center">Top Matched Jobs</h2>

      {loading && (
        <div className="flex items-center space-x-2 mx-auto">
          <LoadingSpinner color="blue" />{" "}
          <span className="font-medium text-[rgb(var(--color-muted))]">
            loading jobs...
          </span>
        </div>
      )}
      {!jobs && !loading && (
        <p className="text-xl text-[rgb(var(--color-muted))] font-medium text-center mt-5">
          No available jobs
        </p>
      )}

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jobs &&
          !loading &&
          jobs.map((job, i) => <JobCard key={i} job={job} />)}
      </motion.div>
    </main>
  );
};

export default JobInput;
