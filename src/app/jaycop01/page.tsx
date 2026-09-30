import type { Metadata } from "next";
import { JaycopTopicStub } from "@/components/JaycopTopicStub";

export const metadata: Metadata = {
  title: "jaycop 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 nywf64.com",
  description:
    "jaycop 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Jaycopter Ride at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <JaycopTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map Entries'} />;
}
