import type { Metadata } from "next";
import { PoorefTopicStub } from "@/components/PoorefTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Pool of Reflections — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries at the Pool of Reflections — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return (
    <PoorefTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"}
    />
  );
}
