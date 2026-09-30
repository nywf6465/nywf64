import type { Metadata } from "next";
import { OregonTopicStub } from "@/components/OregonTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Oregon — nywf64.com",
  description:
    "World's Fair Information Manual — Oregon at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <OregonTopicStub title={"World's Fair Information Manual"} />;
}
