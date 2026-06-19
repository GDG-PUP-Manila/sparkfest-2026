import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SparkFest 2026 | Under Construction",
  description:
    "SparkFest 2026 is under construction. GDG on Campus PUP — launching soon.",
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
