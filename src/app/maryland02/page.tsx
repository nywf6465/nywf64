import type { Metadata } from "next";
import { MarylandTopicStub } from "@/components/MarylandTopicStub";

export const metadata: Metadata = {
  title: "Maryland World's Fair Information Manual \u2014 nywf64.com",
  description:
    "Maryland World's Fair Information Manual \u2014 Maryland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <MarylandTopicStub title="World's Fair Information Manual" />;
}
