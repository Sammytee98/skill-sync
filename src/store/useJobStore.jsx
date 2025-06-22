import { create } from "zustand";

export const useJobStore = create((set) => ({
  jobs: [],
  setJobs: (data) => set({ jobs: data }),
}));
