import { FaWater, FaCity, FaLeaf, FaSolarPanel, FaTools, FaMountain } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaWater size={28} className="text-blue-600" />,
    title: "Water Resources Engineering",
    description: "Sustainable water management solutions, including dam design, irrigation, and water treatment.",
  },
  {
    icon: <FaMountain size={28} className="text-blue-600" />,
    title: "Dam Engineering",
    description: "Comprehensive services throughout the dam lifecycle, from design to safety and rehabilitation.",
  },
  {
    icon: <FaCity size={28} className="text-blue-600" />,
    title: "Infrastructure Development",
    description: "Planning and design of resilient urban and rural infrastructure.",
  },
  {
    icon: <FaSolarPanel size={28} className="text-blue-600" />,
    title: "Renewable Energy Solutions",
    description: "Design and implementation of clean energy systems.",
  },
  {
    icon: <FaLeaf size={28} className="text-blue-600" />,
    title: "Environmental Management",
    description: "Environmental assessments and sustainable practices.",
  },
  {
    icon: <FaTools size={28} className="text-blue-600" />,
    title: "Engineering Consultancy",
    description: "Expert advisory, feasibility studies, and project management.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Our Expertise
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-left hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
