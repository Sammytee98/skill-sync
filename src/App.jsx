import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./layouts/MainLayouts";
import Home from "./pages/Home";
import SavedJob from "./pages/SavedJob";
import ResumeGuard from "./components/guards/ResumeGuard";
import LazyWrapper from "./components/routing/LazyWrapper";

const ResumeInput = lazy(() => import("./pages/ResumeInput"));
const Jobs = lazy(() => import("./pages/Jobs"));
const Result = lazy(() => import("./pages/Result"));
const JobDetails = lazy(() => import("./pages/JobDetails"));

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="resume/"
          element={
            <LazyWrapper>
              <ResumeInput />
            </LazyWrapper>
          }
        />
        <Route
          path="resume/result"
          element={
            <LazyWrapper>
              <ResumeGuard>
                <Result />
              </ResumeGuard>
            </LazyWrapper>
          }
        />
        <Route
          path="resume/result/jobs"
          element={
            <LazyWrapper>
              <ResumeGuard>
                <Jobs />
              </ResumeGuard>
            </LazyWrapper>
          }
        />
        <Route
          path="resume/result/jobs/:id"
          element={
            <LazyWrapper>
              <ResumeGuard>
                <JobDetails />
              </ResumeGuard>
            </LazyWrapper>
          }
        />
        <Route
          path="saved-jobs"
          element={
            <ResumeGuard>
              <SavedJob />
            </ResumeGuard>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
