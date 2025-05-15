import {
  FaLeaf,
  FaLightbulb,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaHardHat,
} from "react-icons/fa";
import {
  FaWater,
  FaMountain,
  FaCity,
  FaSolarPanel,
  FaTools,
} from "react-icons/fa";
import TeamSection from "../components/TeamSection";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | DamTech Nigeria Limited</title>
        <meta
          name="description"
          content="Learn about DamTech’s history, mission, and values. Delivering sustainable engineering solutions since 1992."
        />
        <link rel="canonical" href="https://www.damtechnigeria.com/about" />
        <meta
          property="og:title"
          content="About Us | DamTech Nigeria Limited"
        />
        <meta
          property="og:description"
          content="Sustainable infrastructure and dam engineering expertise across Nigeria and West Africa."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <section className="bg-white text-gray-800 px-6 py-16">
          <div className="max-w-5xl mx-auto">
            {/* Headline */}
            <h1 className="text-3xl md:text-4xl mt-10 font-bold mb-6 text-blue-700">
              About DamTech Nigeria Limited
            </h1>

            {/* Company Overview */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed">
              <p>
                <strong>Founded in 1992</strong>, DamTech Nigeria Limited has
                evolved into a premier provider of cutting-edge and sustainable
                solutions in water resource management, dam engineering,
                engineering consultancy, and renewable energy.
              </p>

              <p>
                With a strong commitment to innovation and excellence, the company
                is proudly registered with the Corporate Affairs Commission (CAC)
                under registration number
                <strong> 202063</strong>. For over three decades, we’ve delivered
                impactful solutions to Nigeria and West Africa’s infrastructure
                and energy sectors.
              </p>

              <p>
                Our expertise spans a wide spectrum, from the intricacies of water
                resources and dam development to the challenges of resilient
                infrastructure and clean energy.
              </p>

              {/* Mission & Vision Box */}
              <motion.div
                className="mt-12 grid md:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.3 }
                  }
                }}
              >
                <motion.div
                  className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-700">
                    To drive positive change by empowering communities, enhancing
                    energy independence, and building climate resilience through
                    our dedicated engineering services.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg shadow-sm"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    To be Africa’s foremost partner in sustainable development,
                    recognized for our unwavering ethical practices and the
                    transformative impact of our projects.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Core Values with Icons */}
            <motion.div
              className="mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-6">
                Our Core Values
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: FaLeaf, color: "green-600", title: "Sustainability", desc: "Environmentally sound and economically viable solutions." },
                  { icon: FaLightbulb, color: "yellow-500", title: "Innovation", desc: "Embracing cutting-edge technology and creative solutions." },
                  { icon: FaShieldAlt, color: "blue-600", title: "Integrity", desc: "Upholding honesty and the highest ethical standards." },
                  { icon: FaStar, color: "indigo-600", title: "Excellence", desc: "Delivering superior quality and exceeding expectations." },
                  { icon: FaUsers, color: "purple-600", title: "Collaboration", desc: "Building strong partnerships with all stakeholders." },
                  { icon: FaHardHat, color: "red-500", title: "Safety", desc: "Protecting people and the environment at all times." },
                ].map(({ icon: Icon, color, title, desc }, i) => (
                  <motion.div
                    key={i}
                    className={`bg-white shadow-md border-l-4 border-${color} p-4 rounded-lg flex items-start space-x-4`}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={24} className={`text-${color} mt-1`} />
                    <div>
                      <h4 className="font-semibold text-gray-800">{title}</h4>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services Overview */}
            <motion.div
              className="mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.25 }
                }
              }}
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-6">
                What We Do
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Water Resources Engineering",
                    icon: <FaWater className="text-blue-600" size={24} />,
                    desc: "Designing sustainable solutions for water access, irrigation, and treatment.",
                  },
                  {
                    title: "Dam Engineering",
                    icon: <FaMountain className="text-green-700" size={24} />,
                    desc: "Comprehensive services from dam design to safety and rehabilitation.",
                  },
                  {
                    title: "Infrastructure Development",
                    icon: <FaCity className="text-indigo-600" size={24} />,
                    desc: "Planning and developing resilient urban and rural infrastructure systems.",
                  },
                  {
                    title: "Renewable Energy Solutions",
                    icon: <FaSolarPanel className="text-yellow-500" size={24} />,
                    desc: "Designing and deploying clean solar and energy systems for the future.",
                  },
                  {
                    title: "Environmental Management",
                    icon: <FaLeaf className="text-green-600" size={24} />,
                    desc: "Sustainable environmental planning, assessments, and compliance.",
                  },
                  {
                    title: "Engineering Consultancy",
                    icon: <FaTools className="text-gray-700" size={24} />,
                    desc: "Feasibility studies, technical support, and expert engineering advice.",
                  },
                ].map((service, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-md shadow-sm"
                    variants={{
                      hidden: { opacity: 0, x: -40 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mt-1">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <TeamSection />
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default About;
