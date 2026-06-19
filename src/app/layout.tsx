import type { Metadata } from "next";
import "./globals.css";

const OG_IMAGE = "/assets/under-construction/sparkypoints-cirby-denied.png";

export const metadata: Metadata = {
  title: "SparkFest 2026 | Under Construction",
  description:
    "SparkFest 2026 is under construction. GDG on Campus PUP — launching soon.",
  icons: {
    icon: "/assets/nav/sparkfest-mascot.png",
    apple: "/assets/nav/sparkfest-mascot.png",
  },
  openGraph: {
    title: "SparkFest 2026 | Under Construction",
    description:
      "SparkFest 2026 is under construction. GDG on Campus PUP — launching soon.",
    images: [
      {
        url: OG_IMAGE,
        alt: "SparkFest 2026 — under construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkFest 2026 | Under Construction",
    description:
      "SparkFest 2026 is under construction. GDG on Campus PUP — launching soon.",
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
      <body className="min-h-full flex flex-col bg-navy-900">{children}</body>
    </html>
  );
}
