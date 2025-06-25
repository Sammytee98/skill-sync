import { create } from "zustand";

const useGuardStore = create((set) => ({
  shouldShowToast: true,
  setShouldShowToast: (value) => set({ shouldShowToast: value }),
}));

export default useGuardStore;
