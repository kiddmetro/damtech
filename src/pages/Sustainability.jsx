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
  FaShieldAlt, // ✅ Add this
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";


const Sustainability = () => {
  return (
    <>
      <Helmet>
        <title>Sustainability | DamTech Nigeria Limited</title>
        <meta
          name="description"
          content="See how DamTech integrates sustainability, ESG, and UN SDGs into all projects. Climate action, clean energy, and community empowerment."
        />
        <link
          rel="canonical"
          href="https://www.damtechnigeria.com/sustainability"
        />
        <meta
          property="og:title"
          content="Sustainability at DamTech Nigeria Limited"
        />
        <meta
          property="og:description"
          content="Driving impact through clean energy, environmental stewardship, and social responsibility."
        />
      </Helmet>

<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
      <section className="bg-white text-gray-800 px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Headline */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl mt-10 font-bold text-blue-700 mb-4">
              Our Commitment to a Sustainable Future
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              DamTech Nigeria Ltd. is committed to integrating sustainable
              development practices into all aspects of its operations. Our ESG
              principles guide us in ensuring balance between economic growth,
              social equity, and environmental stewardship.
            </p>
          </div>

          {/* UN SDGs */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              Our Work & The UN SDGs
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="bg-blue-600 p-5 rounded-lg shadow-md">
                <FaWater size={30} />
                <h3 className="text-xl font-bold mt-2">
                  SDG 6: Clean Water & Sanitation
                </h3>
                <p className="text-sm mt-2">
                  Sustainable water supply, irrigation, and wastewater treatment
                  solutions.
                </p>
              </div>
              <div className="bg-yellow-500 p-5 rounded-lg shadow-md">
                <FaBolt size={30} />
                <h3 className="text-xl font-bold mt-2">
                  SDG 7: Affordable & Clean Energy
                </h3>
                <p className="text-sm mt-2">
                  Development of hydropower and renewable energy infrastructure.
                </p>
              </div>
              <div className="bg-indigo-600 p-5 rounded-lg shadow-md">
                <FaCity size={30} />
                <h3 className="text-xl font-bold mt-2">
                  SDG 9: Industry & Infrastructure
                </h3>
                <p className="text-sm mt-2">
                  Sustainable civil infrastructure that improves lives and
                  economies.
                </p>
              </div>
              <div className="bg-green-600 p-5 rounded-lg shadow-md">
                <FaHandsHelping size={30} />
                <h3 className="text-xl font-bold mt-2">
                  SDG 11: Sustainable Cities
                </h3>
                <p className="text-sm mt-2">
                  Flood control and resilient infrastructure for safer
                  communities.
                </p>
              </div>
              <div className="bg-red-600 p-5 rounded-lg shadow-md">
                <FaCloudSun size={30} />
                <h3 className="text-xl font-bold mt-2">
                  SDG 13: Climate Action
                </h3>
                <p className="text-sm mt-2">
                  Integrating climate adaptation and mitigation in all project
                  phases.
                </p>
              </div>
            </div>
          </div>

          {/* Environmental Stewardship */}
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-6">
              Environmental Stewardship
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg shadow-sm border-l-4 border-green-600">
                <FaLeaf size={24} className="text-green-600 mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Carbon-Neutral Target
                </h4>
                <p className="text-sm text-gray-700">
                  Targeting carbon neutrality by [Year] through operational
                  emission cuts, renewable energy adoption, and certified offset
                  investments.
                </p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg shadow-sm border-l-4 border-green-600">
                <FaTree size={24} className="text-green-600 mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Tree Planting Initiatives
                </h4>
                <p className="text-sm text-gray-700">
                  Active reforestation and afforestation programs in project
                  areas to restore ecosystems and support biodiversity.
                </p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg shadow-sm border-l-4 border-green-600">
                <FaBalanceScale size={24} className="text-green-600 mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Environmental Impact Assessments
                </h4>
                <p className="text-sm text-gray-700">
                  Comprehensive EIAs conducted on all projects to identify risks
                  and implement mitigation strategies.
                </p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg shadow-sm border-l-4 border-green-600">
                <FaUsersCog size={24} className="text-green-600 mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Sustainable Design & Construction
                </h4>
                <p className="text-sm text-gray-700">
                  Prioritizing sustainable materials and construction methods to
                  reduce resource use and environmental footprint.
                </p>
              </div>
            </div>
          </div>

          {/* Social Responsibility */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 mt-12">
              Social Responsibility
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                <FaUsersCog size={24} className="text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-800">
                  DamTech Skills Academy
                </h4>
                <p className="text-sm text-gray-700">
                  Training and capacity-building for young engineers and
                  technicians to enhance local talent and job creation.
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                <FaHandsHelping size={24} className="text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Gender Diversity
                </h4>
                <p className="text-sm text-gray-700">
                  Policies and programs to promote gender equality and empower
                  women in engineering and leadership.
                </p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                <FaCity size={24} className="text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Community Engagement
                </h4>
                <p className="text-sm text-gray-700">
                  Inclusive project design with open communication and community
                  participation to ensure shared impact.
                </p>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-12">
              Governance
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-5 rounded-lg shadow-sm border-l-4 border-gray-600">
                <FaBalanceScale size={24} className="text-gray-700 mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Ethical Practices
                </h4>
                <p className="text-sm text-gray-700">
                  Operating with integrity, fairness, and transparency in all
                  client, partner, and stakeholder relationships.
                </p>
              </div>
              <div className="bg-gray-100 p-5 rounded-lg shadow-sm border-l-4 border-gray-600">
                <FaShieldAlt size={24} className="text-gray-700 mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Anti-Corruption Compliance
                </h4>
                <p className="text-sm text-gray-700">
                  Enforcing a zero-tolerance policy through ISO 37001
                  anti-bribery controls and compliance training.
                </p>
              </div>
              <div className="bg-gray-100 p-5 rounded-lg shadow-sm border-l-4 border-gray-600">
                <FaUsersCog size={24} className="text-gray-700 mb-2" />
                <h4 className="font-semibold text-gray-800">
                  ESG Audits & Reporting
                </h4>
                <p className="text-sm text-gray-700">
                  Regular ESG performance audits with public reporting to
                  promote accountability and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </motion.div>
    </>
  );
};

export default Sustainability;
