import type { Metadata } from "next";
import { ParpenTopicStub } from "@/components/ParpenTopicStub";

export const metadata: Metadata = {
  title: '1964 & 1965 Official Guidebook & Souvenir Map Entries — Parker Pen — nywf64.com',
  description:
    '1964 & 1965 Official Guidebook & Souvenir Map Entries — Parker Pen at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <ParpenTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map Entries'} />;
}
