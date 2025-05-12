import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-gray-500 text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Us for a Sustainable Future
        </h2>
        <p className="text-base md:text-lg mb-8">
          Let's collaborate to develop innovative and sustainable engineering solutions
          that make a real difference.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-950 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
