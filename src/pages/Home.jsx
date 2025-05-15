import Hero from "../components/Hero";
import AboutSnippet from "../components/AboutSnippet";
import ServicesPreview from "../components/ServicesPreview";
import FeaturedProjects from "../components/FeaturedProjects";
import ImpactSection from "../components/ImpactSection";
import CallToAction from "../components/CallToAction";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DamTech Nigeria Limited | Engineering Excellence</title>
        <meta
          name="description"
          content="Delivering innovative and sustainable engineering solutions in water resources, infrastructure, and renewable energy across Nigeria and West Africa."
        />
        <link rel="canonical" href="https://www.damtechnigeria.com/" />
        <meta
          property="og:title"
          content="DamTech Nigeria Limited | Engineering Excellence"
        />
        <meta
          property="og:description"
          content="Trusted engineering consultancy for water, infrastructure, and energy projects in Nigeria and West Africa."
        />
        <meta property="og:url" content="https://www.damtechnigeria.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DamTech Nigeria Limited",
        "url": "https://www.damtechnigeria.com",
        "logo": "https://www.damtechnigeria.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+2348037023388",
          "contactType": "Customer Support"
        }
      }
    `}
        </script>
      </Helmet>

<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Hero />
        <AboutSnippet />
        <ServicesPreview />
        <FeaturedProjects />
        <ImpactSection />
        <CallToAction />
      </div>
      </motion.div>
    </>
  );
};

export default Home;
