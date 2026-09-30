import type { Metadata } from "next";
import { JulfarTopicStub } from "@/components/JulfarTopicStub";

export const metadata: Metadata = {
  title: "julfar Gallery of Photographs \u2014 nywf64.com",
  description:
    "julfar Gallery of Photographs \u2014 Julimar Farm at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <JulfarTopicStub title={'Gallery of Photographs'} />;
}
