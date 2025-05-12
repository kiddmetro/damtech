import { FaSolarPanel, FaUsers, FaTree, FaGraduationCap } from "react-icons/fa";

const impacts = [
  {
    icon: <FaSolarPanel size={32} className="text-green-600" />,
    label: "Expanding Access to Clean Energy",
  },
  {
    icon: <FaUsers size={32} className="text-green-600" />,
    label: "Empowering Local Communities",
  },
  {
    icon: <FaTree size={32} className="text-green-600" />,
    label: "Contributing to Environmental Conservation",
  },
  {
    icon: <FaGraduationCap size={32} className="text-green-600" />,
    label: "Fostering Local Expertise",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Our Commitment to Impact
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-10">
          At Damtech, we are driven by a commitment to creating positive and sustainable
          impact. Our projects align with the UN Sustainable Development Goals, focusing
          on clean energy, climate action, and community empowerment.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {impacts.map((impact, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {impact.icon}
              <p className="mt-3 text-sm text-gray-700">{impact.label}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-8">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Learn More About Our Sustainability Efforts →
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ImpactSection;
