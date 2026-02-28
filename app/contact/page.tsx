import Section from "@/components/Section";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get in touch for collaborations, opportunities, or inquiries.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="border border-gray-700 rounded-lg p-6 bg-[#282828] hover:border-[#00FFFF]/50 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">Email</h2>
            <Link
              href="mailto:vpitsiavas83@gmail.com"
              className="text-[#00FFFF] hover:text-white transition-colors text-lg"
            >
              vpitsiavas83@gmail.com
            </Link>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 bg-[#282828] hover:border-[#00FFFF]/50 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">Phone</h2>
            <Link
              href="tel:+306989940550"
              className="text-[#00FFFF] hover:text-white transition-colors text-lg"
            >
              (+30) 6989940550
            </Link>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 bg-[#282828] hover:border-[#00FFFF]/50 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">Location</h2>
            <p className="text-gray-300 text-lg">Thessaloniki, Greece</p>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 bg-[#282828] hover:border-[#00FFFF]/50 transition-all duration-300">
            <h2 className="text-xl font-semibold text-white mb-3">ResearchGate</h2>
            <Link
              href="https://www.researchgate.net/profile/Vasileios-Pitsiavas-2?ev=hdr_xprf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FFFF] hover:text-white transition-colors text-lg inline-flex items-center gap-2"
            >
              View Profile <span>→</span>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
