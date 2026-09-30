import type { Metadata } from "next";
import { LightingTopicStub } from "@/components/LightingTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album - Unisphere Theme Center — Lighting & Effects — nywf64.com",
  description:
    "Photograph Album - Unisphere Theme Center at Lighting & Effects — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <LightingTopicStub title={"Photograph Album - Unisphere Theme Center"} />;
}
