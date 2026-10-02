import type { Metadata } from "next";
import { LouisiaTopicStub } from "@/components/LouisiaTopicStub";

export const metadata: Metadata = {
  title:
    "Louisiana 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 nywf64.com",
  description:
    "Louisiana 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Louisiana at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <LouisiaTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
