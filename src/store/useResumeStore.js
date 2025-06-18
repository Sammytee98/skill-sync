import { create } from "zustand";
import { persist } from "zustand/middleware";

const useResumeStore = create()(
  persist(
    (set) => ({
      fileName: "",
      resumeText: "",
      setFileName: (name) => set({ fileName: name }),
      setResumeText: (text) => set({ resumeText: text }),
    }),
    {
      name: "resume-data",
    }
  )
);

export default useResumeStore;
