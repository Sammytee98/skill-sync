import { memo } from "react";

const Stepper = () => {
  return (
    <>
      <h2 className="text-2xl font-bold">How It Works</h2>
      <ol className="space-y-6 w-fit mx-auto text-left">
        <li>
          <strong>Step 1:</strong> Paste your resume
        </li>
        <li>
          <strong>Step 2:</strong> Extract and edit your skills
        </li>
        <li>
          <strong>Step 3:</strong> View match jobs
        </li>
      </ol>
    </>
  );
};

export default memo(Stepper);
