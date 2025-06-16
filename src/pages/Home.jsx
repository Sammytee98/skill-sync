import SectionWrapper from "../components/layouts/SectionWrapper";
import Hero from "../components/home/Hero";
import Offers from "../components/home/Offers";
import Stepper from "../components/home/Stepper";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <SectionWrapper className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[70svh]">
        <Hero />
      </SectionWrapper>

      <SectionWrapper className="bg-[rgb(var(--color-bg))]">
        <Offers />
      </SectionWrapper>

      <SectionWrapper className="text-center space-y-10">
        <Stepper />
      </SectionWrapper>

      <SectionWrapper className="text-center">
        <h3 className="text-xl font-bold mb-4">
          Ready to find your perfect match?
        </h3>
        <Button
          onClick={() => navigate("/resume")}
          type="button"
          children="Get Started"
          className="mx-auto"
        />
      </SectionWrapper>
    </main>
  );
};

export default Home;
