import type { Metadata } from "next";
import { JapanTopicStub } from "@/components/JapanTopicStub";

export const metadata: Metadata = {
  title: "Japan Pamphlet: Visit Japan at the New York World's Fair \u2014 nywf64.com",
  description:
    "Japan Pamphlet: Visit Japan at the New York World's Fair \u2014 Japan at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <JapanTopicStub title={'Pamphlet: Visit Japan at the New York World\'s Fair'} />;
}
