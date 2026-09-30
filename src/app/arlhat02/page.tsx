import type { Metadata } from "next";
import { ArlhatTopicStub } from "@/components/ArlhatTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual \u2014 Arlington Hat \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Arlington Hat at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <ArlhatTopicStub title={"World's Fair Information Manual"} />;
}
