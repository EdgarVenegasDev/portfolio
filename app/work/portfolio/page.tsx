import type { Metadata } from "next";
import PortfolioPage from "@/components/case-study/PortfolioPage";

export const metadata: Metadata = {
  title: "Personal Portfolio | Edgar Venegas",
  description: "A production-ready developer portfolio built with Next.js, TypeScript and PostgreSQL.",
};

export default function Page() {
  return <PortfolioPage />;
}