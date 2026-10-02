import type { Metadata } from "next";
import { JulfarTopicStub } from "@/components/JulfarTopicStub";

export const metadata: Metadata = {
  title: "julfar 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 nywf64.com",
  description:
    "julfar 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Julimar Farm at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <JulfarTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map Entries'} />;
}
