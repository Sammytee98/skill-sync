import useSavedJobStore from "../../store/useSavedJobStore";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import toast from "react-hot-toast";
import { memo, useCallback, useMemo } from "react";

const SaveButton = ({ job }) => {
  const { savedJobs, saveJob, removeJob } = useSavedJobStore();
  const isSaved = useMemo(() => {
    return savedJobs.some((j) => j?.url === job?.url);
  }, [savedJobs]);

  const toggleSave = useCallback(() => {
    if (isSaved) {
      removeJob(job?.url);
      toast.success("Job has been removed from saved.", { duration: 5000 });
    } else {
      saveJob(job);
      toast.success("Job has been saved", { duration: 5000 });
    }
  }, [isSaved, removeJob, saveJob, job, job?.url]);

  return (
    <button onClick={toggleSave} className="cursor-pointer">
      {isSaved ? <HiBookmark /> : <HiOutlineBookmark />}
    </button>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.job === nextProps.job;
};

export default memo(SaveButton, areEqual);
