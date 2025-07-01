import clsx from "clsx";
import { memo } from "react";

const UploadBlock = ({
  isParsing,
  progress,
  dragOver,
  setDragOver,
  handleUpload,
  handleFileChange,
  uploadErr,
  fileName,
}) => {
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleUpload(file);
  };

  return (
    <>
      <div className="p-6 rounded-2xl bg-[rgb(var(--color-bg-neutral))] shadow-md">
        <h3 className="text-xl font-bold mb-4">Upload Resume</h3>
        <p className="text-sm text-[rgb(var(--color-muted))] mb-4">
          PDF or DOCX files. Content will be auto-extracted and editable below.
        </p>

        <div
          className={clsx(
            "border-2 border-dashed rounded-xl p-6 transition-all duration-200 flex flex-col items-center space-y-8",
            dragOver
              ? "border-[rgb(var(--color-brand))] bg-[rgb(var(--color-brand-hover))]/10"
              : "border-[rgb(var(--color-border))]"
          )}
          onDragOver={handleDragOver}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <p className="text-sm text-center text-[rgb(var(--color-text-neutral))]">
            📂 Drag & Drop your resume here
            <br /> or click below to upload
          </p>

          <div>
            <label
              htmlFor="resume"
              className={clsx(
                "flex items-center justify-center gap-3 cursor-pointer px-6 py-2 rounded-md shadow-md font-semibold text-center transition text-sm bg-[rgb(var(--color-brand))] hover:bg-[rgb(var(--color-brand-hover))] text-white",
                dragOver && "opacity-40"
              )}
            >
              {isParsing ? `Uploading... ${progress}%` : "📤 Upload Resume"}
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf, .docx"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
        {uploadErr && <p className="text-xs text-red-500 mt-2">{uploadErr}</p>}

        {fileName && !uploadErr && !isParsing && (
          <p className="text-sm mt-2 text-green-600">Uploaded: {fileName}</p>
        )}
      </div>
    </>
  );
};

const areEqual = (prevProps, nextProps) => {
  const parsingProps = prevProps.isParsing === nextProps.isParsing;
  const progressProps = prevProps.progress === nextProps.progress;
  const dragOverProps = prevProps.dragOver === nextProps.dragOver;
  const setDragOverProps = prevProps.setDragOver === nextProps.setDragOver;
  const handleUploadProps = prevProps.handleUpload === nextProps.handleUpload;
  const handleFileChangeProps =
    prevProps.handleFileChange === nextProps.handleFileChange;
  const errProps = prevProps.uploadErr === nextProps.uploadErr;
  const fileNameProps = prevProps.fileName === nextProps.fileName;

  return (
    parsingProps &&
    progressProps &&
    dragOverProps &&
    setDragOverProps &&
    handleUploadProps &&
    handleFileChangeProps &&
    errProps &&
    fileNameProps
  );
};

export default memo(UploadBlock, areEqual);
