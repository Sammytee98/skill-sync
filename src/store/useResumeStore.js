import { create } from "zustand";
import { persist } from "zustand/middleware";

const useResumeStore = create()(
  persist(
    (set) => ({
      fileName: "",
      resumeText: "",
      resumeInsights: null,
      setFileName: (name) => set({ fileName: name }),
      setResumeText: (text) => set({ resumeText: text }),
      setResumeInsights: (data) => set({ resumeInsights: data }),
      resetResume: () =>
        set({
          resumeText: "",
          fileName: "",
          resumeInsights: null,
        }),
    }),
    {
      name: "resume-storage",
    }
  )
);

export default useResumeStore;
