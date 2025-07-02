import { create } from "zustand";

const useGuardStore = create((set) => ({
  shouldShowToast: false,
  setShouldShowToast: (value) => set({ shouldShowToast: value }),
}));

export default useGuardStore;
