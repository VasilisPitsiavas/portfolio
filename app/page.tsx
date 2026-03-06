"use client";

import Section from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate submission — replace with your preferred form service (e.g. Formspree, EmailJS)
    await new Promise((r) => setTimeout(r, 1200));
    setFormStatus("sent");
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "CHUBB",
      location: "Thessaloniki, Greece",
      period: "04/2025 – Present",
      description: [
        "Engineered and deployed scalable, secure backend services and APIs for insurance applications using Java, C#, and cloud technologies",
        "Integrated core systems with external data providers and internal microservices to enhance automated underwriting and risk assessment capabilities",
        "Collaborated within cross-functional agile teams to deliver robust software solutions supporting Chubb's digital transformation initiatives",
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
        "Optimised server performance by integrating SAP applications with third-party modules",
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
      tags: ["BEV", "Statistical Analysis", "Energy", "EV", "Machine Learning", "XGBoost", "ARIMA", "PCA", "k-Means", "Statistics"],
      link: "https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf",
    },
    {
      type: "Preprint",
      date: "Mar 2025",
      title: "Combining Statistical and Machine Learning Methodologies in Energy Consumption Forecasting for Electric Vehicles",
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
          <ScrollReveal delay={0}>
            <div className="flex justify-center mb-6">
              <div className="px-4 py-2 border border-[#00FFFF] rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse"></div>
                <span className="text-sm text-white">AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
              <span className="text-white">Vasileios</span>{" "}
              <span className="text-[#00FFFF]">Pitsiavas</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-white mb-2">
              Software Engineer & Associate Researcher
            </h2>
            <p className="text-gray-400 mb-8">CHUBB · Thessaloniki, Greece</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#projects"
                className="px-8 py-3 bg-[#00FFFF] text-[#0A1316] font-semibold rounded-lg hover:bg-[#00FFFF]/90 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-3 border-2 border-[#00FFFF] text-[#00FFFF] font-semibold rounded-lg hover:bg-[#00FFFF]/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
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
          </ScrollReveal>
        </div>
      </Section>

      {/* About Me Section */}
      <Section className="py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal>
            <div>
              <div className="text-[#00FFFF] text-sm uppercase tracking-wider mb-4">About Me</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Building intelligent <span className="text-[#00FFFF]">systems</span> that matter
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Software Engineer at CHUBB and former Associate Researcher at the Centre for Research and Technology Hellas (CERTH),
                  specialising in backend systems, machine learning, and applied AI for sustainable transportation.
                </p>
                <p>
                  I combine deep technical expertise with a strong research background, bridging the gap between
                  academic innovation and production-ready software. I'm also the creator of{" "}
                  <span className="text-[#00FFFF] font-semibold">Forecastly</span> — a time-series
                  forecasting-as-a-service platform.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <span>📍</span><span>Thessaloniki, Greece</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>💼</span><span>Software Engineer – CHUBB</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span>🎓</span><span>BSc Computer Science – Aristotle University of Thessaloniki</span>
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
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-6">
              {[
                { icon: "⚙️", title: "Backend & API Development", skills: ["Java", "C#", "Python", "REST APIs", "Microservices", "SQL", "OOP"] },
                { icon: "☁️", title: "Cloud & DevOps", skills: ["Docker", "CI/CD", "Git", "Linux / Bash"] },
                { icon: "🧠", title: "AI & Data Science", skills: ["Machine Learning", "Predictive Analytics", "Time-Series Forecasting"] },
                { icon: "⌨️", title: "Additional Languages", skills: ["JavaScript", "C++", "SAP ABAP"] },
              ].map((block) => (
                <div key={block.title} className="bg-[#282828] rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{block.icon}</span>
                    <h3 className="text-xl font-semibold text-white">{block.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {block.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm bg-[#0A1316] text-gray-300 rounded-full border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Technical Skills Section */}
      <Section id="skills" className="py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-[#00FFFF] text-sm uppercase tracking-wider mb-4">Expertise</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              <span className="text-white">Technical</span> <span className="text-[#00FFFF]">Skills</span>
            </h1>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            { label: "Core Backend", title: "Backend & APIs", desc: "Strong production experience designing and implementing backend services, REST APIs and microservices architectures.", skills: ["Java", "C#", "Python", "REST APIs", "Microservices", "SQL", "OOP"] },
            { label: "AI & Forecasting", title: "ML & Time‑Series", desc: "Applied machine learning and forecasting for real products, from experimentation to deployment and monitoring.", skills: ["Machine Learning", "Predictive Analytics", "Time‑Series Forecasting", "ARIMAX", "XGBoost"] },
            { label: "Delivery", title: "Cloud, DevOps & Tooling", desc: "Comfortable owning the full lifecycle from development to deployment, observability and iteration.", skills: ["Docker", "CI/CD", "Git", "Linux / Bash", "JavaScript", "SAP ABAP"] },
          ].map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
              <div className="bg-[#282828] rounded-lg p-6 border border-gray-700 h-full">
                <p className="text-xs text-[#00FFFF] uppercase tracking-wider mb-2">{card.label}</p>
                <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {card.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-[#0A1316] text-gray-300 rounded-full border border-gray-700">{skill}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {[
            { label: "Education", title: "BSc Computer Science", sub: "Aristotle University of Thessaloniki", meta: "Aug 2015 – Aug 2021" },
            { label: "Current Role", title: "Software Engineer", sub: "CHUBB", meta: "Thessaloniki, Greece" },
          ].map((card, i) => (
            <ScrollReveal key={card.label} delay={i * 100}>
              <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
                <div className="text-[#00FFFF] text-xs uppercase tracking-wider mb-3">{card.label}</div>
                <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                <p className="text-gray-300 text-sm mb-1">{card.sub}</p>
                <p className="text-gray-400 text-xs">{card.meta}</p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
              <div className="text-[#00FFFF] text-xs uppercase tracking-wider mb-3">Languages</div>
              <div className="space-y-2">
                {[["Greek", "Native"], ["English", "Proficient"]].map(([lang, level]) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{lang}</span>
                    <span className="px-2 py-1 bg-[#00FFFF]/20 text-[#00FFFF] text-xs rounded border border-[#00FFFF]/30">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-[#282828] rounded-lg p-6 border border-gray-700">
              <div className="text-[#00FFFF] text-xs uppercase tracking-wider mb-3">Certifications & Workshops</div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 text-sm font-medium mb-1">ThessSec Privacy / Security 2017-2018</p>
                  <p className="text-gray-400 text-xs">Web security, privacy & blockchain workshops</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium mb-1">Android Development Workshop (ACM) 2017</p>
                  <p className="text-gray-400 text-xs">Android apps with Java & XML</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Experience</h1>
          </div>
        </ScrollReveal>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="border-l-4 border-[#00FFFF] pl-6 py-4 bg-[#282828] rounded-r-lg hover:bg-[#282828]/80 transition-all duration-300">
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
                    <li key={idx} className="text-gray-300 list-disc list-inside ml-2">{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" className="py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-[#00FFFF] text-sm uppercase tracking-wider mb-4">Research</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Publications</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              7 publications · 15 citations · 311 reads — focused on sustainable transport, EV energy consumption, and applied AI.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="bg-[#282828] rounded-lg p-6 border border-gray-700 hover:border-[#00FFFF]/50 transition-all duration-300 relative">
                <a href={pub.link} target="_blank" rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-gray-400 hover:text-[#00FFFF] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 3h6v6M17 3l-7 7M13 17H3V7" />
                  </svg>
                </a>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#00FFFF] bg-[#0A1316] px-2 py-1 rounded">{pub.type}</span>
                    <span className="text-xs text-gray-400">Full-text available</span>
                  </div>
                  <span className="text-xs text-gray-400">{pub.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 pr-8">{pub.title}</h3>
                {pub.description && <p className="text-gray-300 text-sm mb-4 leading-relaxed">{pub.description}</p>}
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`px-3 py-1 text-xs rounded-full ${tagIndex % 2 === 0 ? "bg-[#00FFFF]/20 text-[#00FFFF] border border-[#00FFFF]/30" : "bg-[#0A1316] text-gray-300 border border-gray-700"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf" target="_blank" rel="noopener noreferrer"
            className="text-[#00FFFF] hover:text-white transition-colors inline-flex items-center gap-2">
            View all publications on ResearchGate <span>→</span>
          </a>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="text-[#00FFFF] text-sm uppercase tracking-wider mb-4">Work</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              <span className="text-white">Projects &</span> <span className="text-[#00FFFF]">Services</span>
            </h1>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ScrollReveal delay={0}>
            <div className="bg-[#282828] rounded-lg p-8 border border-[#00FFFF]/30 hover:border-[#00FFFF] transition-all duration-300 relative h-full">
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-[#0A1316] border border-green-500 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
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
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[["99.9%", "Uptime"], ["<1 min", "Forecast Time"], ["1000+", "Forecasts"]].map(([val, label]) => (
                  <div key={label} className="bg-[#0A1316] border border-[#00FFFF]/30 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{val}</div>
                    <div className="text-xs text-gray-400">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["SaaS", "Time-Series", "ARIMA", "XGBoost", "REST API"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-[#0A1316] text-gray-300 rounded-full border border-gray-700">{tag}</span>
                ))}
              </div>
              <a href="https://www.forecastlyapp.com/home" target="_blank" rel="noopener noreferrer"
                className="text-[#00FFFF] text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1">
                Visit Project <span>→</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-[#282828] rounded-lg p-8 border border-[#00FFFF]/30 hover:border-[#00FFFF] transition-all duration-300 h-full">
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
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "ARIMAX", "XGBoost", "Crypto", "ML"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-[#0A1316] text-gray-300 rounded-full border border-gray-700">{tag}</span>
                ))}
              </div>
              <a href="/currency-forecast" className="text-[#00FFFF] text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1">
                Visit Project <span>→</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get in touch for collaborations, opportunities, or inquiries.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="space-y-5">
              {[
                { label: "Email", value: "vpitsiavas83@gmail.com", href: "mailto:vpitsiavas83@gmail.com" },
                { label: "Phone", value: "(+30) 6989940550", href: "tel:+306989940550" },
                { label: "Location", value: "Thessaloniki, Greece", href: null },
              ].map((item) => (
                <div key={item.label} className="border border-gray-700 rounded-lg p-6 bg-[#282828] hover:border-[#00FFFF]/50 transition-all duration-300">
                  <h2 className="text-sm font-semibold text-[#00FFFF] uppercase tracking-wider mb-2">{item.label}</h2>
                  {item.href ? (
                    <a href={item.href} className="text-white hover:text-[#00FFFF] transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-white">{item.value}</p>
                  )}
                </div>
              ))}
              <div className="border border-gray-700 rounded-lg p-6 bg-[#282828] hover:border-[#00FFFF]/50 transition-all duration-300">
                <h2 className="text-sm font-semibold text-[#00FFFF] uppercase tracking-wider mb-2">ResearchGate</h2>
                <a href="https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-[#00FFFF] transition-colors inline-flex items-center gap-1">
                  View Profile <span>→</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={150}>
            <div className="bg-[#282828] border border-gray-700 rounded-lg p-8">
              <h2 className="text-xl font-semibold text-white mb-6">Send a Message</h2>
              {formStatus === "sent" ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-4">✅</div>
                  <p className="text-white font-semibold text-lg mb-2">Message sent!</p>
                  <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Name</label>
                    <input
                      type="text" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A1316] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00FFFF] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0A1316] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00FFFF] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Message</label>
                    <textarea
                      required rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0A1316] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00FFFF] transition-colors resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full py-3 bg-[#00FFFF] text-[#0A1316] font-semibold rounded-lg hover:bg-[#00FFFF]/90 transition-all duration-300 disabled:opacity-60"
                  >
                    {formStatus === "sending" ? "Sending..." : "Send Message"}
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    To activate email delivery, connect this form to{" "}
                    <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-[#00FFFF] hover:underline">Formspree</a>
                    {" "}or{" "}
                    <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="text-[#00FFFF] hover:underline">EmailJS</a>.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}
