import type { Metadata } from "next";
import { LakcruTopicStub } from "@/components/LakcruTopicStub";

export const metadata: Metadata = {
  title: "Lake Cruise World's Fair Information Manual \u2014 nywf64.com",
  description:
    "Lake Cruise World's Fair Information Manual \u2014 Lake Cruise at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <LakcruTopicStub title={"World's Fair Information Manual"} />;
}
