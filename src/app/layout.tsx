import type { Metadata } from "next";
import "./globals.css";
import ThemeLoadingScreen from "./components/ThemeLoadingScreen";

const OG_IMAGE = "/assets/hero/hero-bg.webp";

export const metadata: Metadata = {
  title: "SparkFest 2026 | GDG on Campus PUP",
  description:
    "SparkFest 2026 by GDG on Campus PUP: Igniting Innovation. Building Impact. Empowering Communities.",
  icons: {
    icon: "/assets/nav/sparkfest-mascot.png",
    apple: "/assets/nav/sparkfest-mascot.png",
  },
  openGraph: {
    title: "SparkFest 2026 | GDG on Campus PUP",
    description:
      "SparkFest 2026 by GDG on Campus PUP: Igniting Innovation. Building Impact. Empowering Communities.",
    images: [
      {
        url: OG_IMAGE,
        alt: "SparkFest 2026 event banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkFest 2026 | GDG on Campus PUP",
    description:
      "SparkFest 2026 by GDG on Campus PUP: Igniting Innovation. Building Impact. Empowering Communities.",
    images: [OG_IMAGE],
  },
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
      <body className="min-h-full flex flex-col bg-navy-900">
        <ThemeLoadingScreen />
        {children}
      </body>
    </html>
  );
}
