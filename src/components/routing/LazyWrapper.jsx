import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../layouts/ErrorFallback";
import { Suspense } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const LazyWrapper = ({ children }) => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigate(-1)}
    >
      <Suspense fallback={<LoadingSpinner size={50} />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default LazyWrapper;
