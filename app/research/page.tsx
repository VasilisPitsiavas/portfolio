import Section from "@/components/Section";
import Link from "next/link";

export default function ResearchPage() {
  const publications = [
    {
      type: "Preprint",
      date: "Feb 2026",
      title: "Analyzing Energy Consumption in Battery Electric Vehicles: A Statistical-based Approach",
      description: "Achieving the Sustainable Development Goals (SDGs) requires a fundamental shift in transportation systems. Battery Electric Vehicles (BEVs) represent a critical pathway toward decarbonization, but their widespread adoption hinges on understanding and optimizing energy consumption patterns.",
      tags: ["BEV", "Statistical Analysis", "Energy", "EV", "Machine Learning", "XGBoost", "ARIMA", "PCA", "k-Means", "Statistics"],
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
      <Section>
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
              <Link
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
              </Link>

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
          <Link
            href="https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00FFFF] hover:text-white transition-colors inline-flex items-center gap-2"
          >
            View all publications on ResearchGate <span>→</span>
          </Link>
        </div>
      </Section>
    </div>
  );
}
