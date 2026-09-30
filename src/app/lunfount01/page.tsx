import type { Metadata } from "next";
import { LunfountTopicStub } from "@/components/LunfountTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Lunar Fountain — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries at the Lunar Fountain — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return (
    <LunfountTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"}
    />
  );
}
