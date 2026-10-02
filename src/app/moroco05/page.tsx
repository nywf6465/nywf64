import type { Metadata } from "next";
import { MorocoTopicStub } from "@/components/MorocoTopicStub";

export const metadata: Metadata = {
  title: "Morocco Pamphlet: Groundbreaking — nywf64.com",
  description:
    "Morocco Pamphlet: Groundbreaking — Morocco at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <MorocoTopicStub title="Pamphlet: Groundbreaking" />;
}
