import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vasileios Pitsiavas – Software Engineer",
  description: "AI Software Engineer specializing in Machine Learning, Time-Series Forecasting, and Backend Engineering",
  openGraph: {
    title: "Vasileios Pitsiavas – Software Engineer",
    description: "AI Software Engineer specializing in Machine Learning, Time-Series Forecasting, and Backend Engineering",
    url: "https://yourdomain.com",
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
