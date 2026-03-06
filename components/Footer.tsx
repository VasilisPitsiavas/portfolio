export default function Footer() {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/VasilisPitsiavas",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vasileios-pitsiavas/",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "ResearchGate",
      href: "https://www.researchgate.net/profile/Vasileios-Pitsiavas-2",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.586 0H4.415C1.977 0 0 1.977 0 4.415v15.17C0 22.023 1.977 24 4.415 24h15.17C22.023 24 24 22.023 24 19.585V4.415C24 1.977 22.023 0 19.586 0zM10.7 16.8H8.4v-6.3H10.7v6.3zm-1.15-7.17a1.33 1.33 0 110-2.66 1.33 1.33 0 010 2.66zm9.05 7.17h-2.3v-3.07c0-.86-.02-1.97-1.2-1.97-1.2 0-1.38.94-1.38 1.9v3.14h-2.3v-6.3h2.2v.86h.03c.31-.58 1.06-1.2 2.18-1.2 2.33 0 2.77 1.54 2.77 3.54v3.1z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0A1316] border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Vasileios Pitsiavas. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-500 hover:text-[#00FFFF] transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
