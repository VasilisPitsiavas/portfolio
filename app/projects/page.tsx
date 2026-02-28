import Section from "@/components/Section";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <Section>
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
            <Link
              href="https://www.forecastlyapp.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FFFF] text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Visit Project <span>→</span>
            </Link>
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
            <Link
              href="/currency-forecast"
              className="text-[#00FFFF] text-sm font-medium hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Visit Project <span>→</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
