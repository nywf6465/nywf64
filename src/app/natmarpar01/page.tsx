import type { Metadata } from "next";
import { NatmarparTopicStub } from "@/components/NatmarparTopicStub";

export const metadata: Metadata = {
  title:
    "National Maritime Union Park 1964 & 1965 Official Guidebook & Souvenir Map Entries — nywf64.com",
  description:
    "National Maritime Union Park 1964 & 1965 Official Guidebook & Souvenir Map Entries — National Maritime Union Park at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <NatmarparTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
