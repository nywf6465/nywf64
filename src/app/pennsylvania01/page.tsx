import type { Metadata } from "next";
import { PennsyTopicStub } from "@/components/PennsyTopicStub";

export const metadata: Metadata = {
  title: '1964 & 1965 Official Guidebook & Souvenir Map Entries — Pennsylvania — nywf64.com',
  description:
    '1964 & 1965 Official Guidebook & Souvenir Map Entries — Pennsylvania at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <PennsyTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map Entries'} />;
}
