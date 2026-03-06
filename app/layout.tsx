import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "Vasileios Pitsiavas – Software Engineer",
  description: "Software Engineer & Researcher specializing in Backend Systems, Machine Learning, and Applied AI for Sustainable Transportation",
  openGraph: {
    title: "Vasileios Pitsiavas – Software Engineer",
    description: "Software Engineer & Researcher specializing in Backend Systems, Machine Learning, and Applied AI.",
    url: "https://vasiliaspitsiavas.github.io/portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0A1316] text-white antialiased">
        <ParticleBackground />
        <Navbar />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
