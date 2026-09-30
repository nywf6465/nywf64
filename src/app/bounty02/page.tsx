import type { Metadata } from "next";
import { BountyTopicStub } from "@/components/BountyTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual \u2014 Bounty \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Bounty at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <BountyTopicStub title={"World's Fair Information Manual"} />;
}
