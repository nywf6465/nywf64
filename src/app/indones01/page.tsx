import type { Metadata } from "next";
import { IndonesTopicStub } from "@/components/IndonesTopicStub";

export const metadata: Metadata = {
  title: "indones 1964 & 1965 Official Guidebook & Souvenir Map \u2014 nywf64.com",
  description:
    "indones 1964 & 1965 Official Guidebook & Souvenir Map \u2014 Indonesia at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <IndonesTopicStub title={'1964 & 1965 Official Guidebook & Souvenir Map'} />;
}
