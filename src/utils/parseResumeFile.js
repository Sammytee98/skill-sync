import * as pdfjsLib from "pdfjs-dist";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs";
import mammoth from "mammoth";

// Attach the PDF worker to handle large files
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

/**
 * Parses a file and extracts plain text from PDF or DOCX.
 * @param {File} file - The uploaded file from the input element
 * @returns {Promise<string>} - Parsed plain text
 */

export const parseResumeFile = async (file) => {
  const fileType = file.type;
  const fileName = file.name.toLowerCase();

  // Handle PDF
  if (fileType === "application/pdf") {
    try {
      const arraBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arraBuffer }).promise;

      let fullText = "";

      // Loop through all PDF pages
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();

        // Join all text items on the page
        const text = content.items.map((item) => item.str).join(" ");
        fullText += text + "\n\n";
      }

      return fullText.trim();
    } catch (err) {
      console.error(err);
      throw new Error("Failed to extract text from PDF.");
    }
  }

  // Handle DOCX
  if (
    fileType ===
      "application/vnd.openxmlformats-officedocument.wordprecoessingml.document" ||
    fileName.endsWith(".docx")
  ) {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      return result.value.trim(); // Contains only text
    } catch (err) {
      console.error("err");
      throw new Error("Failed to extract text from DOCX");
    }
  }

  // Reject unsupported file types
  throw new Error("Unsupported file type. Please upload a PDF or DOCX file.");
};
