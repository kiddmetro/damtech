import Hero from "../components/Hero";
import AboutSnippet from "../components/AboutSnippet";
import ServicesPreview from "../components/ServicesPreview";
import FeaturedProjects from "../components/FeaturedProjects";
import ImpactSection from "../components/ImpactSection";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSnippet />
      <ServicesPreview />
      <FeaturedProjects />
      <ImpactSection />
      <CallToAction />
    </div>
  );
};

export default Home;
