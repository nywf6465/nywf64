import type { Metadata } from "next";
import { BoustrTopicStub } from "@/components/BoustrTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual \u2014 Bourbon Street \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Bourbon Street at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <BoustrTopicStub title={"World's Fair Information Manual"} />;
}
