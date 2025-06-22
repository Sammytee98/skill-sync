import { useNavigate, useParams } from "react-router-dom";
import { useJobStore } from "../store/useJobStore";
import { stripHtml } from "../utils/stripHtml";
import SectionWrapper from "../components/layouts/SectionWrapper";

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { jobs } = useJobStore();

  const job = jobs.find((job) => id === job.id);

  if (!job) {
    return (
      <div className="p-10 text-center">
        <p className="text-red-500 font-medium">Job not found</p>
        <button
          onClick={() => navigate("/job")}
          className="mt-4 text-[rgb(var(--color-brand))] hover:underline cursor-pointer"
        >
          Back to Job Listing
        </button>
      </div>
    );
  }

  const company = job?.company;
  const description = job?.description;
  const location = job?.location;
  const tags = job?.tags;
  const title = job?.title;
  const match = job?.match;
  const url = job?.url;
  const source = job?.source;

  const cleanedDesc = stripHtml(description);

  return (
    <main className="max-w-3xl mx-auto">
      <SectionWrapper>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-[rgb(var(--color-text-neutral))]">
          {company} <span className="text-2xl">.</span> {location}
        </p>
        <p className="text-sm text-green-500 font-semibold mt-2">
          🎯 Match: {match}%
        </p>
        <p className="text-sm text-[rgb(var(--color-text-neutral))] flex flex-wrap space-x-2 mt-2">
          <strong>Tags</strong>:
          {tags.map((tag, i) => (
            <span key={i}>#{tag} </span>
          ))}
        </p>
        <p className="text-[rgb(var(--color-text-neutral))] text-sm mt-2">
          <strong>Job Source</strong>: {source}
        </p>
      </SectionWrapper>

      <SectionWrapper className="space-y-3 text-sm text-[rgb(var(--color-text-neutral))]">
        {cleanedDesc.split("\n").map((line, i) => {
          const [label, ...rest] = line.split(":");
          const isLabel = rest.length > 0;

          return (
            <p key={i} className="break-words whitespace-pre-line">
              {isLabel ? (
                <>
                  <strong>{label.trim()}:</strong> {rest.join(":").trim()}
                </>
              ) : (
                line.trim()
              )}
            </p>
          );
        })}
      </SectionWrapper>

      <SectionWrapper>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-[rgb(var(--color-brand))] text-white rounded-md hover:bg-[rgb(var(--color-brand-hover))] transition"
        >
          Apply Now
        </a>
      </SectionWrapper>
    </main>
  );
};

export default JobDetails;
