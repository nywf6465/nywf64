import type { Metadata } from "next";
import { BountyTopicStub } from "@/components/BountyTopicStub";

export const metadata: Metadata = {
  title: "Brochure: Board the Bounty \u2014 Bounty \u2014 nywf64.com",
  description:
    "Brochure: Board the Bounty \u2014 Bounty at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <BountyTopicStub title={"Brochure: Board the Bounty"} />;
}
