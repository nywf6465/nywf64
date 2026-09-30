import type { Metadata } from "next";
import { FesgasTopicStub } from "@/components/FesgasTopicStub";

export const metadata: Metadata = {
  title: "Article: Energy Vista \u2014 Festival of Gas \u2014 nywf64.com",
  description: "Article: Energy Vista \u2014 Festival of Gas at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <FesgasTopicStub title="Article: Energy Vista" />;
}
