import type { Metadata } from "next";
import { LakcruTopicStub } from "@/components/LakcruTopicStub";

export const metadata: Metadata = {
  title: "Lake Cruise Gallery of Photographs \u2014 nywf64.com",
  description:
    "Lake Cruise Gallery of Photographs \u2014 Lake Cruise at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <LakcruTopicStub title="Gallery of Photographs" />;
}
