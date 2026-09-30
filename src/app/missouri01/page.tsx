import type { Metadata } from "next";
import { MissouriTopicStub } from "@/components/MissouriTopicStub";

export const metadata: Metadata = {
  title: 'Missouri 1964 & 1965 Official Guidebook & Souvenir Map Entries — nywf64.com',
  description: "Missouri 1964 & 1965 Official Guidebook & Souvenir Map Entries — Missouri at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <MissouriTopicStub title='1964 & 1965 Official Guidebook & Souvenir Map Entries' />;
}
