import type { Metadata } from "next";
import { ProortTopicStub } from "@/components/ProortTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Protestant & Orthodox Center \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Protestant & Orthodox Center at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <ProortTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"} />;
}
