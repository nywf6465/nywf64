import type { Metadata } from "next";
import { JordanTopicStub } from "@/components/JordanTopicStub";

export const metadata: Metadata = {
  title: "Jordan Jordan News and Views \u2014 nywf64.com",
  description:
    "Jordan Jordan News and Views \u2014 Jordan at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <JordanTopicStub title={'Jordan News and Views'} />;
}
