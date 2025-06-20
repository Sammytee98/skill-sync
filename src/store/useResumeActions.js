import { useStore } from "zustand";
import useResumeStore from "./useResumeStore";

export const useResumeActions = () => {
  const state = useStore(useResumeStore);

  const addSkill = (type, skill) => {
    if (!skill || state.resumeInsights?.skills[type]?.includes(skill)) return;

    const updated = {
      ...state.resumeInsights,
      skills: {
        ...state.resumeInsights.skills,
        [type]: [...state.resumeInsights.skills[type], skill],
      },
    };
    useResumeStore.setState({ resumeInsights: updated });
  };

  const removeSkill = (type, skill) => {
    const updated = {
      ...state.resumeInsights,
      skills: {
        ...state.resumeInsights.skills,
        [type]: state.resumeInsights.skills[type].filter((s) => s !== skill),
      },
    };
    useResumeStore.setState({ resumeInsights: updated });
  };

  return {
    addSkill,
    removeSkill,
  };
};
