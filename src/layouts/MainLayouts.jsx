import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import useThemeStore from "../store/useThemeStore";
import { useEffect } from "react";

const MainLayout = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="grow">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
