import { Link } from "react-router-dom";

const AboutSnippet = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          About DamTech
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Established in 1992, DamTech Nigeria Limited is a premier engineering consultancy
          with a proven track record of delivering impactful solutions. We specialize in
          water resources, infrastructure development, and renewable energy, committed to
          quality, sustainability, and ethical practices.
        </p>
        <Link
          to="/about"
          className="inline-block text-blue-600 font-semibold hover:underline"
        >
          Read More About Us →
        </Link>
      </div>
    </section>
  );
};

export default AboutSnippet;
