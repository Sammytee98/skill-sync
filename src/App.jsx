import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/Home";
import ResumeInput from "./pages/ResumeInput";
import Jobs from "./pages/Jobs";
import Result from "./pages/Result";
import JobDetails from "./pages/JobDetails";
import ResumeGuard from "./components/guards/ResumeGuard";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<ResumeInput />} />
          <Route
            path="resume/result"
            element={
              <ResumeGuard>
                <Result />
              </ResumeGuard>
            }
          />
          <Route
            path="resume/result/jobs"
            element={
              <ResumeGuard>
                <Jobs />
              </ResumeGuard>
            }
          />
          <Route
            path="resume/result/jobs/:id"
            element={
              <ResumeGuard>
                <JobDetails />
              </ResumeGuard>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
