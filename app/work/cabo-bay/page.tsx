import type { Metadata } from "next";
import CaboBayPage from "@/components/case-study/CaboBayPage";

export const metadata: Metadata = {
  title: "Cabo Bay | Edgar Venegas",
  description: "A server-side web application built for a real transportation business in Los Cabos.",
};

export default function Page() {
  return <CaboBayPage />;
}