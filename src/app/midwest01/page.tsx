import type { Metadata } from "next";
import { MidwestTopicStub } from "@/components/MidwestTopicStub";

export const metadata: Metadata = {
  title: '1964 & 1965 Official Guide Book & Souvenir Map Entries — Midwestern States — nywf64.com',
  description: '1964 & 1965 Official Guide Book & Souvenir Map Entries — Midwestern States at the 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Page() {
  return <MidwestTopicStub title={'1964 & 1965 Official Guide Book & Souvenir Map Entries'} />;
}
