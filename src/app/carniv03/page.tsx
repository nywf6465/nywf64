import type { Metadata } from "next";
import { CarnivTopicStub } from "@/components/CarnivTopicStub";

export const metadata: Metadata = {
  title: "Press Clippings \u2014 Carnival \u2014 nywf64.com",
  description:
    "Press Clippings \u2014 Carnival at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <CarnivTopicStub title={"Press Clippings"} />;
}
