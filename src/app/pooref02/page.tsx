import type { Metadata } from "next";
import { PoorefTopicStub } from "@/components/PoorefTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Pool of Reflections — nywf64.com",
  description:
    "World's Fair Information Manual at the Pool of Reflections — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <PoorefTopicStub title={"World's Fair Information Manual"} />;
}
