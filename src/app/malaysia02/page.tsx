import type { Metadata } from "next";
import { MalaysiaTopicStub } from "@/components/MalaysiaTopicStub";

export const metadata: Metadata = {
  title: "Malaysia World's Fair Information Manual \u2014 nywf64.com",
  description:
    "Malaysia World's Fair Information Manual \u2014 Malaysia at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <MalaysiaTopicStub title="World's Fair Information Manual" />;
}
