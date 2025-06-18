import { create } from "zustand";

const useResumeStore = create((set) => ({
  resumeText: "",
  setResumeText: (text) => set({ resumeText: text }),
}));

export default useResumeStore;
