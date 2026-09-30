import type { Metadata } from "next";
import { AmpridTopicStub } from "@/components/AmpridTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual \u2014 Amphicar Ride \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Amphicar Ride at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AmpridTopicStub title={"World's Fair Information Manual"} />;
}
