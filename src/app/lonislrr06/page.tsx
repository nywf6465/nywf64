import type { Metadata } from "next";
import { LonislrrTopicStub } from "@/components/LonislrrTopicStub";

export const metadata: Metadata = {
  title: "Long Island Rail Road A Legacy Restored \u2014 nywf64.com",
  description:
    "Long Island Rail Road A Legacy Restored \u2014 Long Island Rail Road at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <LonislrrTopicStub title="A Legacy Restored" />;
}
