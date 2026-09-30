import type { Metadata } from "next";
import { MarylandTopicStub } from "@/components/MarylandTopicStub";

export const metadata: Metadata = {
  title: "Maryland Pavilion Plan and Interior Model \u2014 nywf64.com",
  description:
    "Maryland Pavilion Plan and Interior Model \u2014 Maryland at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <MarylandTopicStub title="Pavilion Plan and Interior Model" />;
}
