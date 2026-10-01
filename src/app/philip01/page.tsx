import type { Metadata } from "next";
import { PhilipTopicStub } from "@/components/PhilipTopicStub";

export const metadata: Metadata = {
  title: '1964 & 1965 Official Guidebook & Souvenir Map Entries — Philippines — nywf64.com',
  description:
    '1964 & 1965 Official Guidebook & Souvenir Map Entries — Philippines at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <PhilipTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map Entries'} />;
}
