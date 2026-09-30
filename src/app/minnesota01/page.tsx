import type { Metadata } from "next";
import { MinnesotaTopicStub } from "@/components/MinnesotaTopicStub";

export const metadata: Metadata = {
  title: "Minnesota 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 nywf64.com",
  description:
    "Minnesota 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Minnesota at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <MinnesotaTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />;
}
