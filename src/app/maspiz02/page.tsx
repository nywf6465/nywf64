import type { Metadata } from "next";
import { MaspizTopicStub } from "@/components/MaspizTopicStub";

export const metadata: Metadata = {
  title: "Mastro Pizza World's Fair Information Manual \u2014 nywf64.com",
  description:
    "Mastro Pizza World's Fair Information Manual \u2014 Mastro Pizza at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <MaspizTopicStub title="World's Fair Information Manual" />;
}
