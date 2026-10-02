import type { Metadata } from "next";
import { BetlivTopicStub } from "@/components/BetlivTopicStub";

export const metadata: Metadata = {
  title: "Four Centuries of American Masterpieces \u2014 Better Living Center \u2014 nywf64.com",
  description:
    "Four Centuries of American Masterpieces \u2014 Better Living Center at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <BetlivTopicStub title={"Four Centuries of American Masterpieces"} />;
}
