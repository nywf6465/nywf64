import type { Metadata } from "next";
import { LightingTopicStub } from "@/components/LightingTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map — Lighting & Effects — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map at Lighting & Effects — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <LightingTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
