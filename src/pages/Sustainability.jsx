import {
  FaLeaf,
  FaHandsHelping,
  FaBalanceScale,
  FaTree,
  FaWater,
  FaBolt,
  FaCity,
  FaCloudSun,
  FaUsersCog,
  FaShieldAlt,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Sustainability = () => {
  return (
    <>
      <Helmet>
        <title>Sustainability | DamTech Nigeria Limited</title>
        <meta
          name="description"
          content="See how DamTech integrates sustainability, ESG, and UN SDGs into all projects. Climate action, clean energy, and community empowerment."
        />
        <link rel="canonical" href="https://www.damtechnigeria.com/sustainability" />
        <meta property="og:title" content="Sustainability at DamTech Nigeria Limited" />
        <meta property="og:description" content="Driving impact through clean energy, environmental stewardship, and social responsibility." />
      </Helmet>

      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className="bg-white text-gray-800 px-6 py-16"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Headline */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-3xl md:text-4xl mt-10 font-bold text-blue-700 mb-4">
              Our Commitment to a Sustainable Future
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              DamTech Nigeria Ltd. is committed to integrating sustainable development practices into all aspects of its operations. Our ESG principles guide us in ensuring balance between economic growth, social equity, and environmental stewardship.
            </p>
          </motion.div>

          {/* UN SDGs */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">Our Work & The UN SDGs</h2>
            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6 text-white">
              {[
                {
                  icon: <FaWater size={30} />,
                  title: "SDG 6: Clean Water & Sanitation",
                  desc: "Sustainable water supply, irrigation, and wastewater treatment solutions.",
                  bg: "bg-blue-600",
                },
                {
                  icon: <FaBolt size={30} />,
                  title: "SDG 7: Affordable & Clean Energy",
                  desc: "Development of hydropower and renewable energy infrastructure.",
                  bg: "bg-yellow-500",
                },
                {
                  icon: <FaCity size={30} />,
                  title: "SDG 9: Industry & Infrastructure",
                  desc: "Sustainable civil infrastructure that improves lives and economies.",
                  bg: "bg-indigo-600",
                },
                {
                  icon: <FaHandsHelping size={30} />,
                  title: "SDG 11: Sustainable Cities",
                  desc: "Flood control and resilient infrastructure for safer communities.",
                  bg: "bg-green-600",
                },
                {
                  icon: <FaCloudSun size={30} />,
                  title: "SDG 13: Climate Action",
                  desc: "Integrating climate adaptation and mitigation in all project phases.",
                  bg: "bg-red-600",
                },
              ].map(({ icon, title, desc, bg }, i) => (
                <motion.div key={i} variants={itemVariants} className={`${bg} p-5 rounded-lg shadow-md`}>
                  {icon}
                  <h3 className="text-xl font-bold mt-2">{title}</h3>
                  <p className="text-sm mt-2">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Environmental Stewardship */}
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-6">Environmental Stewardship</h2>
            <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaLeaf size={24} className="text-green-600 mb-2" />,
                  title: "Carbon-Neutral Target",
                  desc: "Targeting carbon neutrality by [Year] through operational emission cuts, renewable energy adoption, and certified offset investments.",
                },
                {
                  icon: <FaTree size={24} className="text-green-600 mb-2" />,
                  title: "Tree Planting Initiatives",
                  desc: "Active reforestation and afforestation programs in project areas to restore ecosystems and support biodiversity.",
                },
                {
                  icon: <FaBalanceScale size={24} className="text-green-600 mb-2" />,
                  title: "Environmental Impact Assessments",
                  desc: "Comprehensive EIAs conducted on all projects to identify risks and implement mitigation strategies.",
                },
                {
                  icon: <FaUsersCog size={24} className="text-green-600 mb-2" />,
                  title: "Sustainable Design & Construction",
                  desc: "Prioritizing sustainable materials and construction methods to reduce resource use and environmental footprint.",
                },
              ].map(({ icon, title, desc }, i) => (
                <motion.div key={i} variants={itemVariants} className="bg-green-50 p-5 rounded-lg shadow-sm border-l-4 border-green-600">
                  {icon}
                  <h4 className="font-semibold text-gray-800">{title}</h4>
                  <p className="text-sm text-gray-700">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Social Responsibility */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 mt-12">Social Responsibility</h2>
            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaUsersCog size={24} className="text-blue-600 mb-2" />,
                  title: "DamTech Skills Academy",
                  desc: "Training and capacity-building for young engineers and technicians to enhance local talent and job creation.",
                },
                {
                  icon: <FaHandsHelping size={24} className="text-blue-600 mb-2" />,
                  title: "Gender Diversity",
                  desc: "Policies and programs to promote gender equality and empower women in engineering and leadership.",
                },
                {
                  icon: <FaCity size={24} className="text-blue-600 mb-2" />,
                  title: "Community Engagement",
                  desc: "Inclusive project design with open communication and community participation to ensure shared impact.",
                },
              ].map(({ icon, title, desc }, i) => (
                <motion.div key={i} variants={itemVariants} className="bg-blue-50 p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                  {icon}
                  <h4 className="font-semibold text-gray-800">{title}</h4>
                  <p className="text-sm text-gray-700">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Governance */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-12">Governance</h2>
            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaBalanceScale size={24} className="text-gray-700 mb-2" />,
                  title: "Ethical Practices",
                  desc: "Operating with integrity, fairness, and transparency in all client, partner, and stakeholder relationships.",
                },
                {
                  icon: <FaShieldAlt size={24} className="text-gray-700 mb-2" />,
                  title: "Anti-Corruption Compliance",
                  desc: "Enforcing a zero-tolerance policy through ISO 37001 anti-bribery controls and compliance training.",
                },
                {
                  icon: <FaUsersCog size={24} className="text-gray-700 mb-2" />,
                  title: "ESG Audits & Reporting",
                  desc: "Regular ESG performance audits with public reporting to promote accountability and transparency.",
                },
              ].map(({ icon, title, desc }, i) => (
                <motion.div key={i} variants={itemVariants} className="bg-gray-100 p-5 rounded-lg shadow-sm border-l-4 border-gray-600">
                  {icon}
                  <h4 className="font-semibold text-gray-800">{title}</h4>
                  <p className="text-sm text-gray-700">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sustainability;
