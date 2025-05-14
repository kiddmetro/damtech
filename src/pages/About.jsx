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

const About = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
          About Damtech Nigeria Limited
        </h1>

        {/* Company Overview */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            <strong>Founded in 1992</strong>, Damtech Nigeria Limited has
            evolved into a premier provider of cutting-edge and sustainable
            solutions in water resource management, dam engineering, engineering
            consultancy, and renewable energy.
          </p>

          <p>
            With a strong commitment to innovation and excellence, the company
            is proudly registered with the Corporate Affairs Commission (CAC)
            under registration number
            <strong> 202063</strong>. For over three decades, we’ve delivered
            impactful solutions to Nigeria and West Africa’s infrastructure and
            energy sectors.
          </p>

          <p>
            Our expertise spans a wide spectrum, from the intricacies of water
            resources and dam development to the challenges of resilient
            infrastructure and clean energy.
          </p>

          {/* Mission & Vision Box */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To drive positive change by empowering communities, enhancing
                energy independence, and building climate resilience through our
                dedicated engineering services.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be Africa’s foremost partner in sustainable development,
                recognized for our unwavering ethical practices and the
                transformative impact of our projects.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values with Icons */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md border-l-4 border-green-600 p-4 rounded-lg flex items-start space-x-4">
              <FaLeaf size={24} className="text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Sustainability</h4>
                <p className="text-sm text-gray-600">
                  Environmentally sound and economically viable solutions.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md border-l-4 border-yellow-500 p-4 rounded-lg flex items-start space-x-4">
              <FaLightbulb size={24} className="text-yellow-500 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Innovation</h4>
                <p className="text-sm text-gray-600">
                  Embracing cutting-edge technology and creative solutions.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md border-l-4 border-blue-600 p-4 rounded-lg flex items-start space-x-4">
              <FaShieldAlt size={24} className="text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Integrity</h4>
                <p className="text-sm text-gray-600">
                  Upholding honesty and the highest ethical standards.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md border-l-4 border-indigo-600 p-4 rounded-lg flex items-start space-x-4">
              <FaStar size={24} className="text-indigo-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Excellence</h4>
                <p className="text-sm text-gray-600">
                  Delivering superior quality and exceeding expectations.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md border-l-4 border-purple-600 p-4 rounded-lg flex items-start space-x-4">
              <FaUsers size={24} className="text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Collaboration</h4>
                <p className="text-sm text-gray-600">
                  Building strong partnerships with all stakeholders.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md border-l-4 border-red-500 p-4 rounded-lg flex items-start space-x-4">
              <FaHardHat size={24} className="text-red-500 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Safety</h4>
                <p className="text-sm text-gray-600">
                  Protecting people and the environment at all times.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mt-16">
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
              <div
                key={i}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-md shadow-sm"
              >
                <div className="mt-1">{service.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      
    <TeamSection />
    </section>
  );
};

export default About;
