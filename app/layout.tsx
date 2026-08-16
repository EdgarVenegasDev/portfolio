import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Edgar Venegas | Software Engineer",
    template: "%s | Edgar Venegas",
  },

  description:
    "Portfolio de Edgar Venegas, Software Engineer enfocado en construir software para resolver problemas reales.",

  keywords: [
    "Edgar Venegas",
    "Software Engineer",
    "Software Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
  ],

  authors: [{ name: "Edgar Venegas" }],
  creator: "Edgar Venegas",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Edgar Venegas | Software Engineer",
    description:
      "Portfolio de Edgar Venegas, Software Engineer enfocado en construir software para resolver problemas reales.",
    siteName: "Edgar Venegas",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} ${manrope.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
