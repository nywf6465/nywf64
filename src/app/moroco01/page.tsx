import type { Metadata } from "next";
import { MorocoTopicStub } from "@/components/MorocoTopicStub";

export const metadata: Metadata = {
  title:
    "Morocco 1964 & 1965 Official Guidebook & Souvenir Map Entries — nywf64.com",
  description:
    "Morocco 1964 & 1965 Official Guidebook & Souvenir Map Entries — Morocco at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <MorocoTopicStub title="1964 & 1965 Official Guidebook & Souvenir Map Entries" />
  );
}
