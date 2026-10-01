import type { Metadata } from "next";
import { PavparTopicStub } from "@/components/PavparTopicStub";

export const metadata: Metadata = {
  title: '1964 & 1965 Official Guidebook & Souvenir Map Entries — Pavilion of Paris — nywf64.com',
  description:
    '1964 & 1965 Official Guidebook & Souvenir Map Entries — Pavilion of Paris at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <PavparTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map Entries'} />;
}
