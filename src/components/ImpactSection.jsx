import { FaSolarPanel, FaUsers, FaTree, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const impacts = [
  {
    icon: <FaSolarPanel size={32} className="text-blue-600" />,
    label: "Expanding Access to Clean Energy",
  },
  {
    icon: <FaUsers size={32} className="text-blue-600" />,
    label: "Empowering Local Communities",
  },
  {
    icon: <FaTree size={32} className="text-blue-600" />,
    label: "Contributing to Environmental Conservation",
  },
  {
    icon: <FaGraduationCap size={32} className="text-blue-600" />,
    label: "Fostering Local Expertise",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Commitment to Impact
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          At DamTech, we are driven by a commitment to creating positive and sustainable
          impact. Our projects align with the UN Sustainable Development Goals, focusing
          on clean energy, climate action, and community empowerment.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              viewport={{ once: true }}
            >
              {impact.icon}
              <p className="mt-3 text-sm text-gray-700">{impact.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          viewport={{ once: true }}
        >
          <Link to="/sustainability" className="text-blue-600 font-semibold hover:underline">
            Learn More About Our Sustainability Efforts →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
