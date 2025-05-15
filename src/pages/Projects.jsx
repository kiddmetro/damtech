import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";


const allProjects = [
  {
    title: "Design of the Master Plan for Flood Control in Aguata",
    location: "Anambra State",
    client: "Anambra State Ministry of Works & Infrastructure",
    year: "2018",
    service: "Flood Control",
    scope: "Detailed flood control design and preparation of tender documents.",
    role: "Lead designer and consultant.",
    outcome:
      "Enhanced preparedness for stormwater management in flood-prone communities.",
  },
  {
    title: "Ijegu Yala Dam Construction Supervision",
    location: "Cross River State",
    client: "Cross River Basin Development Authority",
    year: "2018",
    service: "Dam Supervision",
    scope:
      "Full supervision of the multi-purpose dam and appurtenant structures.",
    outcome:
      "Quality assurance for a strategic water supply and irrigation facility.",
  },
  {
    title: "Kwa Falls Dam Supervision",
    location: "Cross River State",
    client: "Cross River Basin Development Authority",
    year: "2018",
    service: "Dam Supervision",
    scope: "Construction supervision for multi-purpose dam works.",
    outcome:
      "Sustainable water infrastructure delivery in coastal rainforest terrain.",
  },
  {
    title: "Cross River State-Wide Irrigation Infrastructure Design",
    location: "Cross River State",
    client: "Ministry of Agriculture",
    year: "2024",
    service: "Irrigation Design",
    scope: "Irrigation planning and design across three senatorial districts.",
    outcome: "Expanded irrigation potential to boost food production.",
  },
  {
    title: "Odo Ape Irrigation Project",
    location: "Kogi State",
    client: "Lower Niger River Basin Development Authority",
    year: "2018",
    service: "Irrigation Design",
    scope:
      "Detailed design and tender documentation for dam and irrigation works.",
    outcome: "Irrigation blueprint for rural farming expansion.",
  },
  {
    title: "Kainji and Jebba Hydro Power Dams – Rating Curve Studies",
    location: "Niger State",
    client: "Nigeria Integrated Water Resources Commission",
    year: "2017",
    service: "Hydraulic Study",
    scope: "Hydraulic analysis and reservoir rating curve development.",
    outcome: "Improved regulation and hydropower efficiency.",
  },
  {
    title: "Grey Water Footprint Development",
    location: "Nigeria",
    client: "Nigeria Integrated Water Resources Management Commission",
    year: "2024",
    service: "Environmental Analysis",
    scope: "National estimate of grey water footprints.",
    outcome: "Baseline data for water pollution by sector.",
  },
  {
    title: "Emergency Preparedness Plan (EPP) for Tiga Dam",
    location: "Kano State",
    client: "TRIMING Project, FMWR & Sanitation",
    year: "2024",
    service: "Dam Safety",
    scope: "World Bank-compliant emergency preparedness planning.",
    outcome: "Disaster mitigation readiness for Tiga Dam.",
  },
  {
    title: "Langtang Dams Safety Management Plan",
    location: "Plateau State",
    client: "ACReSAL / World Bank",
    year: "2024",
    service: "Dam Safety",
    scope: "Development of Dam Safety Management Plan (DSMP).",
    outcome: "Risk reduction strategy for aging infrastructure.",
  },
  {
    title: "TRIMING II Water Resource Development (Benue Basin)",
    location: "Benue Basin",
    client: "FMWR / TRIMING Project",
    year: "2023",
    service: "Feasibility Study",
    scope: "Feasibility studies and water management planning.",
    outcome: "Data-driven development for agricultural water use.",
  },
  {
    title: "Technical Assessment of Kaduna State Dams",
    location: "Kaduna State",
    client: "Kaduna State Ministry of Public Works",
    year: "2020",
    service: "Dam Assessment",
    scope: "Assessment and supervision for 38 dams.",
    outcome: "State-wide rehabilitation roadmap.",
  },
  {
    title: "Ibiono Ibom Dam Spillway Design",
    location: "Akwa Ibom State",
    client: "Cross River Basin Development Authority",
    year: "2023",
    service: "Spillway Design",
    scope: "Design of inlet, outlet, and spillway systems.",
    outcome: "Improved flood capacity and safety.",
  },
  {
    title: "WFA Projects in North-East Nigeria",
    location: "Adamawa, Borno, Yobe",
    client: "Catholic Relief Services / USAID",
    year: "2020",
    service: "Agricultural Water",
    scope: "Design and supervision of 21 water-for-agriculture schemes.",
    outcome: "Enhanced resilience and access in conflict zones.",
  },
  {
    title: "Shiroro Hydro Dam Spillway Rehabilitation",
    location: "Niger State",
    client: "Power Holding Company of Nigeria",
    year: "2006",
    service: "Dam Rehabilitation",
    scope: "Design for spillway gate remedial works.",
    outcome: "Extended lifespan of major hydro asset.",
  },
  {
    title: "Mambilla Hydroelectric Power Project",
    location: "Taraba State",
    client: "Federal Ministry of Power and Steel",
    year: "2008",
    service: "Hydropower Feasibility",
    scope: "Feasibility and design with Lahmeyer Intl.",
    outcome: "Technical readiness for Nigeria’s largest hydropower project.",
  },
];

const unique = (key) => {
  const values = [...new Set(allProjects.map((p) => p[key]))];
  return key === "year"
    ? values.sort((a, b) => parseInt(b) - parseInt(a)) // descending for years
    : values.sort(); // default sort for others
};


const Projects = () => {
  const [filters, setFilters] = useState({
    year: "",
    location: "",
    service: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredProjects = allProjects.filter(
    (p) =>
      (!filters.year || p.year === filters.year) &&
      (!filters.location || p.location === filters.location) &&
      (!filters.service || p.service === filters.service)
  );

   return (
    <>
      <Helmet>
        <title>Our Projects | DamTech Nigeria Limited</title>
        <meta
          name="description"
          content="Browse DamTech’s portfolio of major engineering projects across Nigeria: irrigation, dams, flood control, and more."
        />
        <link rel="canonical" href="https://www.damtechnigeria.com/projects" />
        <meta
          property="og:title"
          content="Project Portfolio | DamTech Nigeria Limited"
        />
        <meta
          property="og:description"
          content="Discover our impactful engineering projects across Nigeria and West Africa."
        />
      </Helmet>

      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
          exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3 },
          },
        }}
      >
        <section className="bg-white text-gray-800 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl mt-10 font-bold text-center text-blue-700 mb-12">
              Our Project Portfolio
            </h1>

            {/* Filters */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {["year", "location", "service"].map((key) => (
                <select
                  key={key}
                  className="p-3 border rounded text-sm"
                  value={filters[key]}
                  onChange={(e) => handleFilterChange(key, e.target.value)}
                >
                  <option value="">
                    Filter by {key.charAt(0).toUpperCase() + key.slice(1)}
                  </option>
                  {unique(key).map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              ))}
            </div>

            {/* Project Cards */}
            <div className="flex flex-col items-center gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-3/4 lg:w-2/3 bg-white rounded-xl shadow-lg border-t-4 border-blue-700 p-6 md:p-8 transition hover:shadow-xl space-y-4"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Project Title */}
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold text-blue-800 leading-tight">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {project.year}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                        {project.location}
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                        {project.service}
                      </span>
                    </div>
                  </div>

                  {/* Info Blocks */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-gray-500 text-xs uppercase font-bold mb-1">
                        Client
                      </h4>
                      <p className="text-gray-800 text-sm leading-relaxed">
                        {project.client}
                      </p>
                    </div>

                    {project.role && (
                      <div>
                        <h4 className="text-gray-500 text-xs uppercase font-bold mb-1">
                          Role
                        </h4>
                        <p className="text-gray-800 text-sm leading-relaxed">
                          {project.role}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Scope */}
                  <div>
                    <h4 className="text-gray-500 text-xs uppercase font-bold mb-1">
                      Scope of Work
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.scope}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h4 className="text-gray-500 text-xs uppercase font-bold mb-1">
                      Outcome
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Projects;