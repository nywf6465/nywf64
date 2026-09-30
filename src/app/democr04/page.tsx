import type { Metadata } from "next";
import { DemocrTopicStub } from "@/components/DemocrTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Demonstration Center — nywf64.com",
  description:
    "Photograph Album — Demonstration Center at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <DemocrTopicStub title={"Photograph Album"} />;
}
