import type { Metadata } from "next";
import { LebanoTopicStub } from "@/components/LebanoTopicStub";

export const metadata: Metadata = {
  title: "Lebanon World's Fair Information Manual \u2014 nywf64.com",
  description:
    "Lebanon World's Fair Information Manual \u2014 Lebanon at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <LebanoTopicStub title={"World's Fair Information Manual"} />;
}
