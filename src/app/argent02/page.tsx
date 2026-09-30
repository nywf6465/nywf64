import type { Metadata } from "next";
import { ArgentTopicStub } from "@/components/ArgentTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual \u2014 Argentina \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Argentina at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <ArgentTopicStub title={"World's Fair Information Manual"} />;
}
