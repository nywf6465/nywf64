import type { Metadata } from "next";
import { GenfooTopicStub } from "@/components/GenfooTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual \u2014 General Foods Arches \u2014 nywf64.com",
  description: "World's Fair Information Manual \u2014 General Foods Arches at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <GenfooTopicStub title={"World's Fair Information Manual"} />;
}
