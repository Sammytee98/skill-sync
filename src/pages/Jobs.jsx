import { useJobStore } from "../store/useJobStore";
import JobCard from "../components/job/JobCard";
import { motion } from "framer-motion";
import BackButton from "../components/ui/BackButton";
import { Toaster } from "react-hot-toast";
import { useEffect, useMemo, useState } from "react";
import PaginateJob from "../utils/PaginateJob";
import Search from "../components/ui/Search";
import Filter from "../components/ui/Filter";

const Jobs = () => {
  const { jobs } = useJobStore();
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const result = jobs.filter((job) => {
        const normalizedSearch = searchTerm.trim().toLowerCase();
        const jobTitle = job.title?.toLowerCase() || "";
        const jobCompany = job.company?.toLowerCase() || "";
        const jobLocation = job.location?.toLowerCase() || "";

        // Search match
        const matchSearch =
          jobTitle.includes(normalizedSearch) ||
          jobCompany.includes(normalizedSearch);

        const matchFilter =
          locationFilter === "all" ||
          (locationFilter === "remote" && jobLocation.includes("remote")) ||
          (locationFilter === "on-site" && !jobLocation.includes("remote"));

        return matchSearch && matchFilter;
      });
      setFilteredJobs(result);
    }, 300);
    return () => clearTimeout(debounce);
  }, [jobs, searchTerm, locationFilter]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);

  const jobsPerPage = 10;

  const currentJobs = useMemo(() => {
    const offset = currentPage * jobsPerPage;
    return filteredJobs.slice(offset, offset + jobsPerPage);
  }, [jobsPerPage, currentPage, filteredJobs]);

  return (
    <motion.main
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-8 p-6 flex flex-col items-center"
    >
      <Toaster position="top-center" />
      <BackButton to="/resume/result" />
      <h2 className="text-3xl font-bold text-center">Top Matched Jobs</h2>

      <div className="relative flex items-center gap-4 w-full max-w-3xl mx-auto">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Filter
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          showDropdown={showDropDown}
          setShowDropdown={setShowDropDown}
        />
      </div>

      <motion.div className="w-full max-w-3xl mx-auto flex flex-col">
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
