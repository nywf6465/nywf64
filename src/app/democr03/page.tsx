import type { Metadata } from "next";
import { DemocrTopicStub } from "@/components/DemocrTopicStub";

export const metadata: Metadata = {
  title: "Advertising — Demonstration Center — nywf64.com",
  description:
    "Advertising — Demonstration Center at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <DemocrTopicStub title={"Advertising"} />;
}
