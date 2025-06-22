export const getJobMatchScore = (job, skills) => {
  const allSkills = [...skills.technical, ...skills.soft].map((s) =>
    s.toLowerCase()
  );

  const jobTags = job.tags?.map((tag) => tag.toLowerCase()) || [];
  const jobText = (job.description || "").toLowerCase();

  let matchCount = 0;

  allSkills.forEach((skill) => {
    if (jobTags.includes(skill) || jobText.includes(skill)) {
      matchCount++;
    }
  });

  const totalSkills = allSkills.length || 1;
  return Math.round((matchCount / totalSkills) * 100); // Percentage
};
