import axios from "axios";

export const fetchAllJobs = async () => {
  // Fetch from Remote Ok
  const fetchFromRemoteOK = async () => {
    const res = await axios.get("https://remoteok.com/api");
    const data = res.data;

    return data.map((job) => {
      const { id, position, company, location, tags, description, url } = job;

      return {
        id: id,
        title: position,
        company: company,
        location: location,
        tags: tags,
        description: description,
        url: url,
        source: "RemoteOK",
      };
    });
  };

  // Fetch from Arbeitnow
  const fetchFromArbeitNow = async () => {
    const res = await axios.get("https://www.arbeitnow.com/api/job-board-api");
    const data = res.data;

    return data.data.map((job) => {
      const { slug, title, company_name, location, tags, description, url } =
        job;

      return {
        id: slug,
        title: title,
        company: company_name,
        location: location || "Remote",
        tags: tags,
        description: description,
        url: url,
        source: "Arbeitnow",
      };
    });
  };

  // merge both remoteOK and arbeitnow
  const [remoteOK, arbeitNow] = await Promise.all([
    fetchFromRemoteOK(),
    fetchFromArbeitNow(),
  ]);
  const allJobs = [...(remoteOK || []), ...(arbeitNow || [])].filter(Boolean);

  return allJobs;
};
