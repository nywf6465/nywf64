import type { Metadata } from "next";
import { ChukininnTopicStub } from "@/components/ChukininnTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual \u2014 Chukin Inn \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Chukin Inn at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <ChukininnTopicStub title={"World's Fair Information Manual"} />
  );
}
