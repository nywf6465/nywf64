import type { Metadata } from "next";
import { MexicoTopicStub } from "@/components/MexicoTopicStub";

export const metadata: Metadata = {
  title: "Mexico World's Fair Information Manual \u2014 nywf64.com",
  description:
    "Mexico World's Fair Information Manual \u2014 Mexico at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <MexicoTopicStub title="World's Fair Information Manual" />;
}
