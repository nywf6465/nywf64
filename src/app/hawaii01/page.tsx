import type { Metadata } from "next";
import { HawaiiTopicStub } from "@/components/HawaiiTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Hawaii \u2014 nywf64.com",
  description: "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Hawaii at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <HawaiiTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"} />;
}
