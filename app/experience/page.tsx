import Section from "@/components/Section";

export default function ExperiencePage() {
  const skills = [
    { name: "Java / C# / Python", percentage: 90 },
    { name: "REST APIs & Microservices", percentage: 88 },
    { name: "SQL & Databases", percentage: 82 },
    { name: "Machine Learning & AI", percentage: 85 },
    { name: "Time-Series Forecasting", percentage: 90 },
    { name: "Docker & CI/CD", percentage: 78 },
    { name: "JavaScript", percentage: 75 },
    { name: "Git & Linux", percentage: 85 },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "CHUBB",
      location: "Thessaloniki, Greece",
      period: "04/2025 – Now",
      description: [
        "Engineered and deployed scalable, secure backend services and APIs for insurance applications using Java, C#, and cloud technologies",
        "Integrated core systems with external data providers and internal microservices to enhance automated underwriting and risk assessment capabilities",
        "Collaborated within cross-functional agile teams to deliver robust software solutions that support Chubb's digital transformation initiatives",
      ],
    },
    {
      title: "Software Engineer (Associate Researcher)",
      company: "Centre of Research and Technology Hellas (CERTH)",
      location: "Thessaloniki, Greece",
      period: "10/2023 – 04/2025",
      description: [
        "Developed AI-driven predictive services for fuel cell energy consumption using Python and machine learning",
        "Integrated forecasting models with industry systems to aid sustainable transportation",
        "Contributed to the Sinnogenes Horizon EU Program, focusing on innovative solutions in sustainable and smart mobility",
      ],
    },
    {
      title: "Software Developer",
      company: "Deloitte",
      location: "Thessaloniki, Greece",
      period: "12/2021 – 09/2023",
      description: [
        "Created custom modules in SAP ABAP and Java, managed data handling with SQL",
        "Improved web applications for clients, enhancing functionality with RESTful APIs and microservices",
        "Optimized server performance by integrating SAP applications with third-party modules",
      ],
    },
  ];

  return (
    <div className="pt-16">
      <Section>
        <div className="text-center mb-12">
          <div className="text-[#00FFFF] text-sm uppercase tracking-wider mb-4">Expertise</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="text-white">Technical</span>{" "}
            <span className="text-[#00FFFF]">Skills</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Left Column - Skills with Progress Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-white font-mono text-sm">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-[#282828] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00FFFF] rounded-full transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
              <div className="text-[#00FFFF] text-xs uppercase tracking-wider mb-3">Education</div>
              <h3 className="text-lg font-bold text-white mb-1">BSc Computer Science</h3>
              <p className="text-gray-300 text-sm mb-1">Aristotle University of Thessaloniki</p>
              <p className="text-gray-400 text-xs">Aug 2015 - Aug 2021</p>
            </div>

            {/* Current Role */}
            <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
              <div className="text-[#00FFFF] text-xs uppercase tracking-wider mb-3">Current Role</div>
              <h3 className="text-lg font-bold text-white mb-1">Software Engineer</h3>
              <p className="text-gray-300 text-sm mb-1">CHUBB</p>
              <p className="text-gray-400 text-xs">Thessaloniki, Greece</p>
            </div>

            {/* Languages */}
            <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
              <div className="text-[#00FFFF] text-xs uppercase tracking-wider mb-3">Languages</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Greek</span>
                  <span className="px-2 py-1 bg-[#00FFFF]/20 text-[#00FFFF] text-xs rounded border border-[#00FFFF]/30">
                    Native
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">English</span>
                  <span className="px-2 py-1 bg-[#00FFFF]/20 text-[#00FFFF] text-xs rounded border border-[#00FFFF]/30">
                    Proficient
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
              <div className="text-[#00FFFF] text-xs uppercase tracking-wider mb-3">
                Certifications & Workshops
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 text-sm font-medium mb-1">
                    ThessSec Privacy / Security 2017-2018
                  </p>
                  <p className="text-gray-400 text-xs">
                    Web security, privacy & blockchain workshops
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium mb-1">
                    Android Development Workshop (ACM) 2017
                  </p>
                  <p className="text-gray-400 text-xs">
                    Android apps with Java & XML
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 border-[#00FFFF] pl-6 py-4 bg-[#282828] rounded-r-lg hover:bg-[#282828]/80 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-[#00FFFF] mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.location}</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0 font-mono text-sm">{exp.period}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 list-disc list-inside ml-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
