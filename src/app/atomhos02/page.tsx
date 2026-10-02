import type { Metadata } from "next";
import { AtomhosTopicStub } from "@/components/AtomhosTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual \u2014 Atomedic Hospital \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Atomedic Hospital at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <AtomhosTopicStub title={"World's Fair Information Manual"} />;
}
