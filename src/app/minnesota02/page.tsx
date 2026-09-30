import type { Metadata } from "next";
import { MinnesotaTopicStub } from "@/components/MinnesotaTopicStub";

export const metadata: Metadata = {
  title: "Minnesota World's Fair Information Manual \u2014 nywf64.com",
  description:
    "Minnesota World's Fair Information Manual \u2014 Minnesota at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <MinnesotaTopicStub title="World's Fair Information Manual" />;
}
