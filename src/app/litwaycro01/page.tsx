import type { Metadata } from "next";
import { LitwaycroTopicStub } from "@/components/LitwaycroTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Lithuanian Wayside Cross \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map \u2014 Lithuanian Wayside Cross at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <LitwaycroTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
