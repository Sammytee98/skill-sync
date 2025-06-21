import { technicalSkills, nonTechnicalSkills } from "./skills";

// Escape special charaters
const escapeRegex = (str) => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

export const extractResumeInsights = (text) => {
  const lowerText = text.toLowerCase();

  // Match the whole words to avoid false positives
  const matchSkill = (skill) => {
    const escapedSkill = escapeRegex(skill.toLowerCase());
    const regex = new RegExp(`\\b${escapedSkill}\\b`);
    return regex.test(lowerText);
  };

  const tech = technicalSkills.filter(matchSkill);
  const soft = nonTechnicalSkills.filter(matchSkill);

  return {
    skills: { technical: tech, soft: soft },
    summary: `${text.slice(0, 400)}...`,
  };
};
