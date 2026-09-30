import type { Metadata } from "next";
import { DemocrTopicStub } from "@/components/DemocrTopicStub";

export const metadata: Metadata = {
  title: "List of Sub-Exhibitors — Demonstration Center — nywf64.com",
  description:
    "List of Sub-Exhibitors — Demonstration Center at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <DemocrTopicStub title={"List of Sub-Exhibitors"} />;
}
