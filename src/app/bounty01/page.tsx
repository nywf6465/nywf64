import type { Metadata } from "next";
import { BountyTopicStub } from "@/components/BountyTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Bounty \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Bounty at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <BountyTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />
  );
}
