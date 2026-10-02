import type { Metadata } from "next";
import { GencigTopicStub } from "@/components/GencigTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual \u2014 General Cigar \u2014 nywf64.com",
  description: "World's Fair Information Manual \u2014 General Cigar at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <GencigTopicStub title={"World's Fair Information Manual"} />;
}
