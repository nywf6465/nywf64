import type { Metadata } from "next";
import { EquitTopicStub } from "@/components/EquitTopicStub";

export const metadata: Metadata = {
  title: "Transcript Slections from the Demograph Soundtrack \u2014 Equitable Life \u2014 nywf64.com",
  description: "Transcript Slections from the Demograph Soundtrack \u2014 Equitable Life Assurance Society at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <EquitTopicStub title="Transcript Slections from the Demograph Soundtrack" />;
}
