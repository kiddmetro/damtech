import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="bg-gray-500 text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Partner with Us for a Sustainable Future
        </motion.h2>

        <motion.p
          className="text-base md:text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Let's collaborate to develop innovative and sustainable engineering solutions
          that make a real difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-950 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
