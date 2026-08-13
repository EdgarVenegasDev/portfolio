import type { Metadata } from "next";
import Cabo101Page from "@/components/case-study/Cabo101Page";

export const metadata: Metadata = {
  title: "Cabo101 | Edgar Venegas",
  description: "A full-stack booking platform for transportation and tourism services in Los Cabos.",
};

export default function Page() {
  return <Cabo101Page />;
}