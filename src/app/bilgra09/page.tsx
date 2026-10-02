import type { Metadata } from "next";
import { BilgraTopicStub } from "@/components/BilgraTopicStub";

export const metadata: Metadata = {
  title: "Brochure: Man in the Fifth Dimension \u2014 Billy Graham \u2014 nywf64.com",
  description:
    "Brochure: Man in the Fifth Dimension \u2014 Billy Graham at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <BilgraTopicStub title={"Brochure: Man in the Fifth Dimension"} />;
}
