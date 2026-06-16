import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SparkFest 2026 | Igniting Innovation, Building Impact, Empowering Communities",
  description: "SparkFest 2026 is a flagship hackathon organized by Google Developer Groups on Campus Polytechnic University of the Philippines (GDG PUP), mirroring real-world startup environments to build solutions that create tangible impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased [scroll-padding-top:5rem]"
    >
      <body className="min-h-full flex flex-col bg-navy-900">{children}</body>
    </html>
  );
}
