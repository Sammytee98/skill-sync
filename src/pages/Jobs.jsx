import { useJobStore } from "../store/useJobStore";
import JobCard from "../components/job/JobCard";
import { motion } from "framer-motion";
import BackButton from "../components/ui/BackButton";

const Jobs = () => {
  const { jobs } = useJobStore();

  return (
    <main className="space-y-14 p-6 flex flex-col items-center">
      <BackButton />
      <h2 className="text-3xl font-bold text-center">Top Matched Jobs</h2>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jobs && jobs.map((job, i) => <JobCard key={i} job={job} />)}
      </motion.div>
    </main>
  );
};

export default Jobs;
