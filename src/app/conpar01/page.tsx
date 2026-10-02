import type { Metadata } from "next";
import { ConparTopicStub } from "@/components/ConparTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Continental Park — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Continental Park at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <ConparTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"}
    />
  );
}
