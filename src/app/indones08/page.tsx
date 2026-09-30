import type { Metadata } from "next";
import { IndonesTopicStub } from "@/components/IndonesTopicStub";

export const metadata: Metadata = {
  title: "indones The Indonesia Controversy at the Fair \u2014 nywf64.com",
  description:
    "indones The Indonesia Controversy at the Fair \u2014 Indonesia at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <IndonesTopicStub title={'The Indonesia Controversy at the Fair'} />;
}
