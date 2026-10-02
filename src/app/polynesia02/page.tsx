import type { Metadata } from "next";
import { PolyneTopicStub } from "@/components/PolyneTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Polynesia — nywf64.com",
  description:
    "World's Fair Information Manual — Polynesia at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PolyneTopicStub title={"World's Fair Information Manual"} />;
}
