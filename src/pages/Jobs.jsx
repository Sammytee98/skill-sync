import { useJobStore } from "../store/useJobStore";
import JobCard from "../components/job/JobCard";
import { motion } from "framer-motion";
import BackButton from "../components/ui/BackButton";
import { Toaster } from "react-hot-toast";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import PaginateJob from "../utils/PaginateJob";

const Jobs = () => {
  const { jobs } = useJobStore();
  const [currentPage, setCurrentPage] = useState(0);

  const jobsPerPage = 10;
  const offset = currentPage * jobsPerPage;
  const currentJobs = jobs.slice(offset, offset + jobsPerPage);

  return (
    <motion.main
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-14 p-6 flex flex-col items-center"
    >
      <Toaster position="top-center" />
      <BackButton to="/resume/result" />
      <h2 className="text-3xl font-bold text-center">Top Matched Jobs</h2>

      <motion.div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
        {currentJobs &&
          currentJobs.map((job, i) => <JobCard key={i} job={job} />)}
      </motion.div>

      <PaginateJob
        jobs={jobs}
        jobsPerPage={jobsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </motion.main>
  );
};

export default Jobs;
