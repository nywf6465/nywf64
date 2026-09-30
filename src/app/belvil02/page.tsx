import type { Metadata } from "next";
import { BelvilTopicStub } from "@/components/BelvilTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual \u2014 Belgian Village \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Belgian Village at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <BelvilTopicStub title={"World's Fair Information Manual"} />;
}
