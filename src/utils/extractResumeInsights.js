import { technicalSkills, nonTechnicalSkills } from "./skills";

export const extractResumeInsights = (text) => {
  const lowerText = text.toLowerCase();

  const tech = technicalSkills.filter((skill) =>
    lowerText.includes(skill.toLowerCase())
  );
  const soft = nonTechnicalSkills.filter((skill) =>
    lowerText.includes(skill.toLowerCase())
  );

  return {
    skills: { technical: tech, soft: soft },
    summary: `${text.slice(0, 400)}...`,
  };
};
