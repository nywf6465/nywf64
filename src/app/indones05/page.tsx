import type { Metadata } from "next";
import { IndonesTopicStub } from "@/components/IndonesTopicStub";

export const metadata: Metadata = {
  title: "indones Pamphlet: Groundbreaking \u2014 nywf64.com",
  description:
    "indones Pamphlet: Groundbreaking \u2014 Indonesia at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <IndonesTopicStub title={'Pamphlet: Groundbreaking'} />;
}
