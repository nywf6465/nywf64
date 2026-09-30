import type { Metadata } from "next";
import { BraraiTopicStub } from "@/components/BraraiTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual \u2014 Brass Rail \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Brass Rail at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <BraraiTopicStub title={"World's Fair Information Manual"} />;
}
