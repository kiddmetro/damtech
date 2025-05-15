import { motion } from "framer-motion";

const projects = [
  {
    title: "Study and Design of the Cross River State Wide Irrigation Infrastructure (2024 - Ongoing)",
    scope:
      "Detailed study and design of irrigation infrastructure covering the three senatorial districts in Cross River State. This large-scale project demonstrates our capacity to handle complex irrigation planning.",
    client: "Cross River State Government, Ministry of Agriculture",
    image: "/projects-assets/project1.webp",
  },
  {
    title: "Emergency Preparedness Plan (EPP) for Tiga Dam, Kano State (2024)",
    scope:
      "Preparation of an Emergency Preparedness Plan (EPP) for Tiga Dam, a critical infrastructure project. This highlights our expertise in dam safety and risk management, essential for international standards.",
    image: "/projects-assets/project2.webp",
  },
  {
    title: "Design of the Master Plan for Flood Control in Aguata, Anambra State (2018 - Ongoing)",
    scope:
      "Detailed Design and Preparation of tender documents for a significant flood control project. This showcases our expertise in addressing critical environmental challenges.",
    client: "Anambra State Ministry of Works & Infrastructure",
    image: "/projects-assets/project3.webp",
  },
  {
    title: "Construction Supervision of Ijegu Yala Dam Project, Cross River State (2018 - Ongoing)",
    scope:
      "Construction supervision of the multipurpose Ijegu Yala Dam and associated structures. This demonstrates our experience in overseeing complex dam construction projects.",
    client: "Cross River Basin Development Authority",
    image: "/projects-assets/project4.webp",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden text-left"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              />
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="p-6"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-2">{project.scope}</p>
                {project.client && (
                  <p className="text-gray-500 text-xs italic mb-3">
                    Client: {project.client}
                  </p>
                )}
                {/* <a href="#" className="text-blue-600 font-semibold hover:underline">
                  View Project Details →
                </a> */}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
