import { useCallback, useState } from "react";
import SectionWrapper from "../components/layouts/SectionWrapper";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import UploadBlock from "../components/resume/UploadBlock";
import useResumeStore from "../store/useResumeStore";
import { parseResumeFile } from "../utils/parseResumeFile";
import { extractResumeInsights } from "../utils/extractResumeInsights";
import ScrollableModal from "../components/resume/SrollableModal";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const ResumeInput = () => {
  const {
    fileName,
    resumeText,
    resumeInsights,
    setFileName,
    setResumeText,
    setResumeInsights,
  } = useResumeStore();
  const [uploadErr, setUploadErr] = useState("");
  const [progress, setProgress] = useState(0);
  const [isParsing, setIsParsing] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleUpload = useCallback(async (file) => {
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

      const text = await parseResumeFile(file);

      setFileName(file.name);
      setResumeText(text);
      setResumeInsights(extractResumeInsights(text));
      setProgress(100);
      toast.success("File uploaded successfully");
    } catch (err) {
      console.log("Error:", err);

      setUploadErr(err.message);
      setResumeText("");
      setProgress(0);
      toast.error("Failed to upload file");
    } finally {
      setIsParsing(false);
    }
  }, []);

  const handleFileChange = useCallback(
    (e) => {
      const file = e.target.files[0];

      if (file) handleUpload(file);
    },
    [handleUpload]
  );

  const isEmpty = resumeText.trim().length === 0;

  const handleNext = useCallback(() => setShowPreview(true), [isEmpty]);

  return (
    <motion.main
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <SectionWrapper className="space-y-10">
        <h2 className="text-2xl font-bold">Let's Start With Your Resume</h2>
        <p className="text-base text-[rgb(var(--color-muted))]">
          Upload a resume or paste it below &mdash; we'll use it to find the
          best job match for you.
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
          <Button
            children="Next Step"
            onClick={handleNext}
            disabled={isEmpty}
          />
        </div>

        <ScrollableModal
          showPreview={showPreview}
          resumeInsights={resumeInsights}
          setShowPreview={setShowPreview}
        />
      </SectionWrapper>
    </motion.main>
  );
};

export default ResumeInput;
