import type { Metadata } from "next";
import { PolyneTopicStub } from "@/components/PolyneTopicStub";

export const metadata: Metadata = {
  title: '1964 & 1965 Official Guidebook & Souvenir Map Entries — Polynesia — nywf64.com',
  description:
    '1964 & 1965 Official Guidebook & Souvenir Map Entries — Polynesia at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <PolyneTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map Entries'} />;
}
