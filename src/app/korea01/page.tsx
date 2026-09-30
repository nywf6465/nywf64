import type { Metadata } from "next";
import { KoreaTopicStub } from "@/components/KoreaTopicStub";

export const metadata: Metadata = {
  title: "Korea 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 nywf64.com",
  description:
    "Korea 1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Korea, Republic of at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <KoreaTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map Entries'} />;
}
