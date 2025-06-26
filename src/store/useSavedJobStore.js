import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSavedJobStore = create(
  persist(
    (set, get) => ({
      savedJobs: [],

      saveJob: (job) => {
        const { savedJobs } = get();

        const exists = savedJobs.find((j) => j?.url === job?.url);
        if (exists) return;
        set({ savedJobs: [...savedJobs, job] });
      },

      removeJob: (jobUrl) => {
        const filtered = get().savedJobs.filter((job) => job?.url !== jobUrl);
        set({ savedJobs: filtered });
      },

      clearSavedjobs: () => {
        set({ savedJobs: [] });
      },
    }),
    {
      name: "saved-jobs",
    }
  )
);

export default useSavedJobStore;
