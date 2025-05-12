import { Link } from "react-router-dom";
import heroBg from "../assets/hero.webp"; // replace with actual image path

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-2 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Engineering Excellence for a Sustainable Future
        </h1>
        <p className="text-base md:text-lg mb-8">
          Delivering innovative and sustainable engineering solutions in water resources,
          infrastructure, and renewable energy across Nigeria and West Africa.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Explore Our Services
          </Link>
          <Link
            to="/projects"
            className="bg-white text-blue-700 hover:bg-gray-200 px-6 py-3 rounded-lg transition"
          >
            View Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
