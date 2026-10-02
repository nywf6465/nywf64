import type { Metadata } from "next";
import { JaycopTopicStub } from "@/components/JaycopTopicStub";

export const metadata: Metadata = {
  title: "jaycop World's Fair Information Manual \u2014 nywf64.com",
  description:
    "jaycop World's Fair Information Manual \u2014 Jaycopter Ride at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <JaycopTopicStub title={'World\'s Fair Information Manual'} />;
}
