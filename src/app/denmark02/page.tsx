import type { Metadata } from "next";
import { DenmarkTopicStub } from "@/components/DenmarkTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Denmark — nywf64.com",
  description:
    "World's Fair Information Manual — Denmark at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <DenmarkTopicStub title={"World's Fair Information Manual"} />;
}
