import SectionWrapper from "../components/layouts/SectionWrapper";
import StepIndicator from "../components/ui/StepIndicator";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useResumeStore from "../store/useResumeStore";
import { parseResumeFile } from "../utils/parseResumeFile";
import UploadBlock from "../components/resume/UploadBlock";

const ResumeInput = () => {
  const navigate = useNavigate();
  const { fileName, resumeText, setFileName, setResumeText } = useResumeStore();
  const [uploadErr, setUploadErr] = useState("");
  const [progress, setProgress] = useState(0);
  const [isParsing, setIsParsing] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleUpload = async (file) => {
    if (!file) return;

    setProgress(0);
    setIsParsing(true);
    setUploadErr("");

    try {
      let fakeProgress = 0;
      const interval = setInterval(() => {
        fakeProgress += 10;
        setProgress(fakeProgress);
        if (fakeProgress >= 90) clearInterval(interval);
      }, 80);

      const parsedText = await parseResumeFile(file);
      setFileName(file.name);
      setResumeText(parsedText);
      setProgress(100);
    } catch (err) {
      console.log("Error:", err);

      setUploadErr(err.message);
      setProgress(0);
    } finally {
      setIsParsing(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) handleUpload(file);
  };

  const handleNext = () => {
    navigate("/job");
  };

  const isEmpty = resumeText.trim().length === 0;

  return (
    <SectionWrapper className="space-y-10">
      <StepIndicator current={0} total={3} />

      <h2 className="text-2xl font-bold">Let's Start With Your Resume</h2>
      <p className="text-base text-[rgb(var(--color-muted))]">
        Upload a resume or paste it below &mdash; we'll use it to find the
        bestjob match for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upload Block */}
        <UploadBlock
          isParsing={isParsing}
          progress={progress}
          dragOver={dragOver}
          setDragOver={setDragOver}
          handleUpload={handleUpload}
          handleFileChange={handleFileChange}
          uploadErr={uploadErr}
          fileName={fileName}
        />

        {/* Paste Block */}
        <div className="p-6 rounded-2xl bg-[rgb(var(--color-bg-neutral))] shadow-md">
          <h3 className="text-xl font-bold mb-4">Paste Resume Text</h3>

          <Textarea
            id="resume"
            rows={10}
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste or edit your resume here..."
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <Button children="Next Step" onClick={handleNext} disabled={isEmpty} />
      </div>
    </SectionWrapper>
  );
};

export default ResumeInput;
