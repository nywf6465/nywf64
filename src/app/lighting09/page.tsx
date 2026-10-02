import type { Metadata } from "next";
import { LightingTopicStub } from "@/components/LightingTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album - Trees & Shrubbery — Lighting & Effects — nywf64.com",
  description:
    "Photograph Album - Trees & Shrubbery at Lighting & Effects — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <LightingTopicStub title={"Photograph Album - Trees & Shrubbery"} />;
}
