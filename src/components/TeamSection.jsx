const teamMembers = [
  {
    name: "ENGR. SOLOMON YAKUBU MSHELBWALA",
    role: "MD/CEO | Civil Engineer | Water Resources Specialist",
    image: "/profileimg/team1.jpg",
    bio: `With over three decades of expertise in dam design, construction supervision, and infrastructure development, Solomon Yakubu Mshelbwala is a distinguished leader in water resources engineering. He began his career in 1986 with the Borno State Ministry of Works and has led major dam projects nationwide. As MD of Strategic Hydro Services, he brings strategic leadership and technical excellence.`,
  },
  {
    name: "ENGR. DAISI CLEMENT ALABI",
    role: "COO | Water Resources & Dam Engineer",
    image: "/profileimg/team2.jpg",
    bio: `With 20+ years in hydrology, dam safety, and project management, Engr. Daisi holds a B.Eng (FUTA) and M.Eng (FUT Minna). A member of NSE, COREN, NIWE, and NICOLD, he's led critical projects with AfDB, USAID, and the FMWR. He provides strategic technical leadership across DamTech's programs.`,
  },
  {
    name: "ENGR. ISHAKU PINDAR",
    role: "Principal Water Resources Engineer",
    image: "/profileimg/team3.jpg",
    bio: `Expert in dam engineering, water footprint analysis, and infrastructure development. COREN-registered and NIEE fellow. Holds degrees in Civil & Water Resources Engineering and Environmental Resource Management.`,
  },
  {
    name: "ENGR. AZUBUIKE EDEBEATU",
    role: "Project Management Lead",
    image: "/profileimg/team4.jpg",
    bio: `Leads multidisciplinary engineering project execution at DamTech. Specializes in planning, resource coordination, and quality control.`,
  },
  {
    name: "AUGUSTINE ABANI OKEREKE",
    role: "Finance & Administration Manager",
    image: "/profileimg/team5.jpg",
    bio: `With a strong background in finance, logistics, and governance, Augustine ensures operational efficiency and HSE compliance. Formerly with SPDC, he is a certified Medical Laboratory Scientist with additional expertise in corporate risk management.`,
  },
];

const TeamSection = () => {
  return (
    <section className="bg-gray-50 mt-24 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Meet Our Team
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center md:items-start"
            >
              {/* Image wrapper */}
              <div className="w-40 h-40 sm:w-32 sm:h-32 flex-shrink-0 rounded-md overflow-hidden border">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-sm text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
