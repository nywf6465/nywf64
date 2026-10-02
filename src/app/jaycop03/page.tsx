import type { Metadata } from "next";
import { JaycopTopicStub } from "@/components/JaycopTopicStub";

export const metadata: Metadata = {
  title: "jaycop Gallery of Photographs \u2014 nywf64.com",
  description:
    "jaycop Gallery of Photographs \u2014 Jaycopter Ride at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <JaycopTopicStub title={'Gallery of Photographs'} />;
}
