import type { Metadata } from "next";
import { HalsciTopicStub } from "@/components/HalsciTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual \u2014 Hall of Science \u2014 nywf64.com",
  description: "World's Fair Information Manual \u2014 Hall of Science at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <HalsciTopicStub title={"World's Fair Information Manual"} />;
}
