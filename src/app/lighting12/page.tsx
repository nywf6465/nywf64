import type { Metadata } from "next";
import { LightingTopicStub } from "@/components/LightingTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual - Sound System & Background Music — Lighting & Effects — nywf64.com",
  description:
    "World's Fair Information Manual - Sound System & Background Music at Lighting & Effects — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <LightingTopicStub title={"World's Fair Information Manual - Sound System & Background Music"} />;
}
