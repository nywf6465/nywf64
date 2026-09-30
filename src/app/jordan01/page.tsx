import type { Metadata } from "next";
import { JordanTopicStub } from "@/components/JordanTopicStub";

export const metadata: Metadata = {
  title: "Jordan 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 nywf64.com",
  description:
    "Jordan 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Jordan at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <JordanTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map Entries'} />;
}
