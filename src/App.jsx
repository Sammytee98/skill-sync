import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/Home";
import ResumeInput from "./pages/ResumeInput";
import JobInput from "./pages/JobInput";
import Result from "./pages/Result";
import JobDetails from "./pages/JobDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<ResumeInput />} />
          <Route path="job" element={<JobInput />} />
          <Route path="job/:id" element={<JobDetails />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
