const services = [
  {
    title: "Water Resources Engineering",
    color: "blue-700",
    summary:
      "Comprehensive planning and delivery of water resource systems focused on long-term sustainability and regional impact.",
    details: [
      "Design and analysis of dams adapted to geographic and hydrologic conditions.",
      "Development of potable water supply and distribution networks for urban and rural settings.",
      "Design and implementation of irrigation schemes to support agricultural productivity.",
      "Planning and execution of sewage treatment and safe disposal infrastructure.",
      "Conducting hydrological assessments for flood forecasting and water system planning.",
      "Management of groundwater exploration, extraction, and recharge systems.",
    ],
  },
  {
    title: "Dam Engineering",
    color: "green-700",
    summary:
      "Specialized services across the full lifecycle of dam projects, including safety, design, construction, and rehabilitation.",
    details: [
      "Feasibility studies to evaluate technical, economic, and environmental aspects of proposed dam sites.",
      "Design and supervision of dam construction in accordance with national and international standards.",
      "Comprehensive dam safety assessments and risk mitigation strategies.",
      "Upgrading and rehabilitation of aging dam infrastructure.",
      "Planning and operation of reservoir systems for flood control and water storage.",
    ],
  },
  {
    title: "Infrastructure Development",
    color: "yellow-600",
    summary:
      "Planning, engineering, and delivery of infrastructure projects supporting economic growth and public service delivery.",
    details: [
      "Urban and regional development planning, including land use and zoning.",
      "Design and construction of transportation infrastructure such as roads and bridges.",
      "Development of industrial parks and facilities for manufacturing and logistics.",
      "Rural electrification initiatives to improve energy access in underserved areas.",
    ],
  },
  {
    title: "Renewable Energy Solutions",
    color: "purple-700",
    summary:
      "Integrated renewable energy systems designed for efficiency, scalability, and reduced environmental impact.",
    details: [
      "Design and deployment of grid-tied and standalone solar energy systems.",
      "Planning and engineering of wind energy installations for commercial and municipal applications.",
      "Integration of hybrid energy systems combining solar, wind, and backup sources.",
      "Implementation of battery storage solutions to ensure continuous energy availability.",
    ],
  },
  {
    title: "Environmental Management",
    color: "teal-700",
    summary:
      "Environmental protection and sustainability services that align infrastructure with regulatory compliance and global standards.",
    details: [
      "Execution of Environmental Impact Assessments (EIAs) for new and existing projects.",
      "Design of water and wastewater treatment facilities for health and ecological preservation.",
      "Development of adaptation and mitigation plans addressing climate-related challenges.",
      "Design of waste collection, treatment, and disposal systems for urban and industrial areas.",
    ],
  },
  {
    title: "Engineering Consultancy",
    color: "gray-800",
    summary:
      "Strategic and technical advisory services covering infrastructure feasibility, compliance, and lifecycle project management.",
    details: [
      "Feasibility studies and due diligence assessments for proposed capital projects.",
      "End-to-end project management, including planning, execution, and monitoring.",
      "Advisory on local and international regulatory compliance in engineering works.",
      "Technical consultation for risk assessment, value engineering, and sustainability optimization.",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Our Comprehensive Engineering Services
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-sm border-l-4 p-6 border-blue-600"
            >
              <h2 className={`text-xl font-bold text-${service.color} mb-2`}>
                {service.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4">{service.summary}</p>
              <div className="space-y-2 text-sm text-gray-600">
                {service.details.map((detail, i) => (
                  <p key={i}>• {detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
