import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/Home";
import ResumeInput from "./pages/ResumeInput";
import JobInput from "./pages/JobInput";
import Resume from "./pages/Result";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<ResumeInput />} />
          <Route path="job" element={<JobInput />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
