import type { Metadata } from "next";
import { IndiaTopicStub } from "@/components/IndiaTopicStub";

export const metadata: Metadata = {
  title: "India Gallery of Photographs \u2014 nywf64.com",
  description:
    "India Gallery of Photographs \u2014 India at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <IndiaTopicStub title={'Gallery of Photographs'} />;
}
