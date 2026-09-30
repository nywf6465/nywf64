import type { Metadata } from "next";
import { PakistTopicStub } from "@/components/PakistTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Pakistan — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Pakistan at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <PakistTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"}
    />
  );
}
