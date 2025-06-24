import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/Home";
import ResumeInput from "./pages/ResumeInput";
import Jobs from "./pages/Jobs";
import Result from "./pages/Result";
import JobDetails from "./pages/JobDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<ResumeInput />} />
          <Route path="resume/result" element={<Result />} />
          <Route path="resume/result/jobs" element={<Jobs />} />
          <Route path="resume/result/jobs/:id" element={<JobDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
