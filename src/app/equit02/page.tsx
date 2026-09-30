import type { Metadata } from "next";
import { EquitTopicStub } from "@/components/EquitTopicStub";

export const metadata: Metadata = {
  title: "Postcards \u2014 Equitable Life \u2014 nywf64.com",
  description: "Postcards \u2014 Equitable Life Assurance Society at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <EquitTopicStub title="Postcards" />;
}
