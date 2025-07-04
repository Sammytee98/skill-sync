import useSavedJobStore from "../store/useSavedJobStore";
import SectionWrapper from "../components/layouts/SectionWrapper";
import BackButton from "../components/ui/BackButton";
import Button from "../components/ui/Button";
import JobCard from "../components/job/JobCard";
import { Toaster } from "react-hot-toast";
import PaginateJob from "../utils/PaginateJob";
import { useMemo, useState } from "react";

const SavedJob = () => {
  const { savedJobs, clearSavedJobs } = useSavedJobStore();
  const [currentPage, setCurrentPage] = useState(0);

  const jobsPerPage = 5;

  const currentJobs = useMemo(() => {
    const offset = currentPage * jobsPerPage;
    return savedJobs.slice(offset, offset + jobsPerPage);
  }, [jobsPerPage, currentPage, savedJobs]);

  return (
    <main>
      <Toaster position="top-center" />
      <div className="px-6 pt-4">
        <BackButton />
      </div>

      {savedJobs.length < 1 && (
        <p className="text-xl text-[rgb(var(--color-muted))] text-center mt-10">
          No Saved Jobs
        </p>
      )}
      {currentJobs.length > 0 && (
        <>
          <SectionWrapper className="space-y-10">
            <h2 className="text-3xl font-bold text-center">Saved Jobs</h2>

            <div className="grid grid-cols-1 max-w-3xl mx-auto">
              {currentJobs.map((job, i) => {
                return <JobCard key={i} job={job} />;
              })}
            </div>
          </SectionWrapper>

          {currentJobs > 5 && (
            <PaginateJob
              jobs={savedJobs}
              jobsPerPage={jobsPerPage}
              setCurrentPage={setCurrentPage}
            />
          )}

          <SectionWrapper className="max-w-xl mx-auto">
            <Button
              onClick={clearSavedJobs}
              variant="danger"
              children="Clear Saved Jobs"
              className="w-full"
            />
          </SectionWrapper>
        </>
      )}
    </main>
  );
};

export default SavedJob;
