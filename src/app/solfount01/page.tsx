import type { Metadata } from "next";
import { SolfountTopicStub } from "@/components/SolfountTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Solar Fountain — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries at the Solar Fountain — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <SolfountTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"}
    />
  );
}
