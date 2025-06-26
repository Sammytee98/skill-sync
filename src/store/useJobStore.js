import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useJobStore = create(
  persist(
    (set, get) => ({
      jobs: [],
      setJobs: (data) => set({ jobs: data }),
    }),
    {
      name: "matched-jobs",
    }
  )
);
