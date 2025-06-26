import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SaveButton from "../ui/SaveButton";

const JobCard = ({ job }) => {
  const { id, title, company, location, match, source } = job;

  return (
    <div className="py-4 px-4 sm:px-6 md:px-8 lg:px-10 space-y-3 bg-[rgb(var(--color-bg-neutral))] shadow-lg rounded-xl">
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="space-y-1 pt-2">
            <h3 className="text-xl font-bold text-[rgb(var(--color-text))]">
              {title}
            </h3>

            <p className="text-[rgb(var(--color-text-neutral))] text-sm">
              <strong>Company:</strong> {company}
            </p>

            <p className="text-[rgb(var(--color-text-neutral))] text-sm">
              <strong>Location:</strong> {location}
            </p>

            <p className="text-[rgb(var(--color-text-neutral))] text-sm">
              <strong>Source:</strong> {source}
            </p>
          </div>
        </div>

        <p className="text-green-500">
          <strong>🎯 Match:</strong> <span>{match}%</span>
        </p>
      </div>

      <div className="flex justify-between items-center">
        <Link
          to={`${id}`}
          className="flex items-center space-x-1 text-sm font-medium text-[rgb(var(--color-brand))] hover:text-[rgb(var(--color-brand-hover))] transition cursor-pointer"
        >
          <span>View Detail</span> <FaArrowRight className="w-3 h-3" />
        </Link>

        <SaveButton job={job} />
      </div>
    </div>
  );
};

export default JobCard;
