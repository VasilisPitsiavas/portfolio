import Link from "next/link";
import Section from "@/components/Section";

export default function Home() {
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

  const publications = [
    {
      type: "Preprint",
      date: "Feb 2026",
      title: "Analyzing Energy Consumption in Battery Electric Vehicles: A Statistical-based Approach",
      description:
        "Achieving the Sustainable Development Goals (SDGs) requires a fundamental shift in transportation systems. Battery Electric Vehicles (BEVs) represent a critical pathway toward decarbonization, but their widespread adoption hinges on understanding and optimizing energy consumption patterns.",
      tags: [
        "BEV",
        "Statistical Analysis",
        "Energy",
        "EV",
        "Machine Learning",
        "XGBoost",
        "ARIMA",
        "PCA",
        "k-Means",
        "Statistics",
      ],
      link: "https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf",
    },
    {
      type: "Preprint",
      date: "Mar 2025",
      title:
        "Combining Statistical and Machine Learning Methodologies in Energy Consumption Forecasting for Electric Vehicles",
      description:
        "Combines classical statistical modelling with modern machine learning techniques to forecast the energy consumption of electric vehicles under real-world driving conditions.",
      tags: ["EV", "Machine Learning", "XGBoost", "ARIMA", "Forecasting"],
      link: "https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf",
    },
    {
      type: "EURO Working Group on Transportation",
      date: "Mar 2025",
      title: "Energy-based FCEV Optimization Services: Toward Greener Transportation",
      tags: ["FCEV", "Optimization", "Green Transport"],
      link: "https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf",
    },
    {
      type: "MDPI Energies",
      date: "2024",
      title: "Toward Sustainable Mobility: AI-Enabled Automated Refueling for Fuel Cell Electric Vehicles",
      tags: ["FCEV", "AI", "Sustainable Mobility"],
      link: "https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section id="about" className="pt-24 pb-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Availability Tag */}
          <div className="flex justify-center mb-6">
            <div className="px-4 py-2 border border-[#00FFFF] rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00FFFF] rounded-full"></div>
              <span className="text-sm text-white">AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
            <span className="text-white">Vasileios</span>{" "}
            <span className="text-[#00FFFF]">Pitsiavas</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
            Software Engineer & Associate Researcher
          </h2>
          <p className="text-gray-400 mb-8">
            CHUBB - Thessaloniki, Greece
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#00FFFF] text-[#0A1316] font-semibold rounded-lg hover:bg-[#00FFFF]/90 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">7</div>
              <div className="text-sm text-gray-400 uppercase">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">15</div>
              <div className="text-sm text-gray-400 uppercase">Citations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00FFFF] mb-1">311</div>
              <div className="text-sm text-[#00FFFF] uppercase">Reads</div>
            </div>
          </div>
        </div>
      </Section>

      {/* About Me Section */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - About */}
          <div>
            <div className="text-[#00FFFF] text-sm uppercase tracking-wider mb-4">About Me</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building intelligent <span className="text-[#00FFFF]">systems</span> that matter
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Software Engineer and Associate Researcher at the Centre for Research and Technology Hellas (CERTH), 
                specialising in backend systems, machine learning, and applied AI for sustainable transportation.
              </p>
              <p>
                I combine deep technical expertise with a strong research background, bridging the gap between 
                academic innovation and production-ready software. I'm also the creator of{" "}
                <span className="text-[#00FFFF] font-semibold">Forecastly</span> — a time-series 
                forecasting-as-a-service platform.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <span>📍</span>
                <span>Thessaloniki, Greece</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span>💼</span>
                <span>Associate Researcher Software Engineer - CERTH/ITI</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span>🎓</span>
                <span>BSc Computer Science - Aristotle University of Thessaloniki</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span>✉️</span>
                <a href="mailto:vpitsiavas83@gmail.com" className="hover:text-[#00FFFF] transition-colors">
                  vpitsiavas83@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span>📞</span>
                <a href="tel:+306989940550" className="hover:text-[#00FFFF] transition-colors">
                  (+30) 6989940550
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <div className="space-y-6">
              {/* Backend & API Development */}
              <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">⚙️</span>
                  <h3 className="text-xl font-semibold text-white">Backend & API Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Java", "C#", "Python", "REST APIs", "Microservices", "SQL", "OOP"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-[#0A1316] text-gray-300 rounded-full border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">☁️</span>
                  <h3 className="text-xl font-semibold text-white">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "CI/CD", "Git", "Linux / Bash"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-[#0A1316] text-gray-300 rounded-full border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & Data Science */}
              <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🧠</span>
                  <h3 className="text-xl font-semibold text-white">AI & Data Science</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Predictive Analytics", "Time-Series Forecasting"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-[#0A1316] text-gray-300 rounded-full border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Languages */}
              <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">⌨️</span>
                  <h3 className="text-xl font-semibold text-white">Additional Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "C++", "SAP ABAP"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-[#0A1316] text-gray-300 rounded-full border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Skills Section */}
      <Section id="skills" className="py-16">
        <div className="text-center mb-12">
          <div className="text-[#00FFFF] text-sm uppercase tracking-wider mb-4">Expertise</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="text-white">Technical</span>{" "}
            <span className="text-[#00FFFF]">Skills</span>
          </h1>
        </div>

        {/* Skill clusters instead of percentage bars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
            <p className="text-xs text-[#00FFFF] uppercase tracking-wider mb-2">Core Backend</p>
            <h3 className="text-lg font-semibold text-white mb-3">Backend & APIs</h3>
            <p className="text-sm text-gray-300 mb-4">
              Strong production experience designing and implementing backend services, REST APIs and
              microservices architectures.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java", "C#", "Python", "REST APIs", "Microservices", "SQL", "OOP"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-[#0A1316] text-gray-300 rounded-full border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
            <p className="text-xs text-[#00FFFF] uppercase tracking-wider mb-2">AI & Forecasting</p>
            <h3 className="text-lg font-semibold text-white mb-3">ML & Time‑Series</h3>
            <p className="text-sm text-gray-300 mb-4">
              Applied machine learning and forecasting for real products, from experimentation to
              deployment and monitoring.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Machine Learning",
                "Predictive Analytics",
                "Time‑Series Forecasting",
                "ARIMAX",
                "XGBoost",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-[#0A1316] text-gray-300 rounded-full border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
            <p className="text-xs text-[#00FFFF] uppercase tracking-wider mb-2">Delivery</p>
            <h3 className="text-lg font-semibold text-white mb-3">Cloud, DevOps & Tooling</h3>
            <p className="text-sm text-gray-300 mb-4">
              Comfortable owning the full lifecycle from development to deployment, observability and
              iteration.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Docker", "CI/CD", "Git", "Linux / Bash", "JavaScript", "SAP ABAP"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-[#0A1316] text-gray-300 rounded-full border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Profile details cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
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
                <p className="text-gray-400 text-xs">Android apps with Java & XML</p>
              </div>
            </div>
          </div>
        </div>

      
      </Section>
      <Section id="experience" className="py-16">
      <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Experience</h1>


        </div>
               {/* Experience Timeline */}
               <div className="mt-16">
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
    
      {/* Publications Section */}
      <Section id="publications" className="py-16">
        <div className="text-center mb-12">
          <div className="text-[#00FFFF] text-sm uppercase tracking-wider mb-4">Research</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Publications</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            7 publications · 15 citations · 311 reads — focused on sustainable transport, EV energy consumption, and applied AI.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-[#282828] rounded-lg p-6 border border-gray-700 hover:border-[#00FFFF]/50 transition-all duration-300 relative"
            >
              {/* External Link Icon */}
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-gray-400 hover:text-[#00FFFF] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M11 3h6v6M17 3l-7 7M13 17H3V7" />
                </svg>
              </a>

              {/* Metadata */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#00FFFF] bg-[#0A1316] px-2 py-1 rounded">
                    {pub.type}
                  </span>
                  {pub.link && (
                    <span className="text-xs text-gray-400">Full-text available</span>
                  )}
                </div>
                <span className="text-xs text-gray-400">{pub.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 pr-8">
                {pub.title}
              </h3>

              {/* Description */}
              {pub.description && (
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {pub.description}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 text-xs rounded-full ${
                      tagIndex % 2 === 0
                        ? "bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30"
                        : "bg-[#0A1316] text-gray-300 border border-gray-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ResearchGate Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FFFF] hover:text-white transition-colors inline-flex items-center gap-2"
          >
            View all publications on ResearchGate <span>→</span>
          </a>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="py-16">
        <div className="text-center mb-12">
          <div className="text-[#00FFFF] text-sm uppercase tracking-wider mb-4">Work</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="text-white">Projects &</span>{" "}
            <span className="text-[#00FFFF]">Services</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Forecastly Card */}
          <div className="bg-[#282828] rounded-lg p-8 border border-[#00FFFF]/30 hover:border-[#00FFFF] transition-all duration-300 relative">
            {/* Live Product Tag */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[#0A1316] border border-green-500 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-500 font-medium">Live Product</span>
            </div>

            <div className="flex items-start gap-4 mb-4 mt-8">
              <div className="text-4xl">📈</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">Forecastly</h3>
                <p className="text-[#00FFFF] text-sm mb-4">Time Series Forecasting as a Service</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A production SaaS platform that transforms raw time-series data into professional forecasts 
              in under a minute. Supports ARIMA, ETS, XGBoost and AI-powered model selection with 
              interactive visualisations, CSV/PDF export, and a REST API.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-[#0A1316] border border-[#00FFFF]/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-xs text-gray-400">Uptime</div>
              </div>
              <div className="bg-[#0A1316] border border-[#00FFFF]/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">&lt;1 min</div>
                <div className="text-xs text-gray-400">Forecast Time</div>
              </div>
              <div className="bg-[#0A1316] border border-[#00FFFF]/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                <div className="text-xs text-gray-400">Forecasts</div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["SaaS", "Time-Series", "ARIMA", "XGBoost", "REST API"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-[#0A1316] text-gray-300 rounded-full border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://www.forecastlyapp.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FFFF] text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Visit Project <span>→</span>
            </a>
          </div>

          {/* Currency Forecasting App Card */}
          <div className="bg-[#282828] rounded-lg p-8 border border-[#00FFFF]/30 hover:border-[#00FFFF] transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">₿</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">Currency Forecasting App</h3>
                <p className="text-[#00FFFF] text-sm mb-4">ML-based Cryptocurrency Forecasting</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A machine learning application for cryptocurrency price forecasting using ARIMAX and 
              XGBoost models, combining statistical and ML methodologies for accurate predictions.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["Python", "ARIMAX", "XGBoost", "Crypto", "ML"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-[#0A1316] text-gray-300 rounded-full border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/currency-forecast"
              className="text-[#00FFFF] text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Visit Project <span>→</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get in touch for collaborations, opportunities, or inquiries.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="border border-gray-700 rounded-lg p-6 bg-[#282828] hover:border-[#00FFFF]/50 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">Email</h2>
            <a
              href="mailto:vpitsiavas83@gmail.com"
              className="text-[#00FFFF] hover:text-white transition-colors text-lg"
            >
              vpitsiavas83@gmail.com
            </a>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 bg-[#282828] hover:border-[#00FFFF]/50 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">Phone</h2>
            <a
              href="tel:+306989940550"
              className="text-[#00FFFF] hover:text-white transition-colors text-lg"
            >
              (+30) 6989940550
            </a>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 bg-[#282828] hover:border-[#00FFFF]/50 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">Location</h2>
            <p className="text-gray-300 text-lg">Thessaloniki, Greece</p>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 bg-[#282828] hover:border-[#00FFFF]/50 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">ResearchGate</h2>
            <a
              href="https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FFFF] hover:text-white transition-colors text-lg inline-flex items-center gap-2"
            >
              View Profile <span>→</span>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
