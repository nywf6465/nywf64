import type { Metadata } from "next";
import { KidlanTopicStub } from "@/components/KidlanTopicStub";

export const metadata: Metadata = {
  title: "kidlan 1964 & 1965 Official Guidebook & Souvenir \u2014 nywf64.com",
  description:
    "kidlan 1964 & 1965 Official Guidebook & Souvenir \u2014 Kiddyland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <KidlanTopicStub title={"1964 & 1965 Official Guidebook & Souvenir"} />
  );
}
