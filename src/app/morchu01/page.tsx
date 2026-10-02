import type { Metadata } from "next";
import { MorchuTopicStub } from "@/components/MorchuTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Mormon Church \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Mormon Church at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <MorchuTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"} />;
}
