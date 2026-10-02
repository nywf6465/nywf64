import type { Metadata } from "next";
import { PavamiTopicStub } from "@/components/PavamiTopicStub";

export const metadata: Metadata = {
  title: '1964 & 1965 Official Guidebook & Souvenir Map Entries — Pavilion of American Interiors — nywf64.com',
  description:
    '1964 & 1965 Official Guidebook & Souvenir Map Entries — Pavilion of American Interiors at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PavamiTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map Entries'} />;
}
