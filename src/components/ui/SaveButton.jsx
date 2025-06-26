import useSavedJobStore from "../../store/useSavedJobStore";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import toast from "react-hot-toast";

const SaveButton = ({ job }) => {
  const { savedJobs, saveJob, removeJob } = useSavedJobStore();
  const isSaved = savedJobs.some((j) => j?.url === job?.url);

  const toggleSave = () => {
    if (isSaved) {
      removeJob(job?.url);
      toast.success("Job has been removed from saved.", { duration: 5000 });
    } else {
      saveJob(job);
      toast.success("Job has been saved", { duration: 5000 });
    }
  };

  return (
    <button onClick={toggleSave} className="cursor-pointer">
      {isSaved ? <HiBookmark /> : <HiOutlineBookmark />}
    </button>
  );
};

export default SaveButton;
