import type { Metadata } from "next";
import { PoolinTopicStub } from "@/components/PoolinTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Pool of Industry — nywf64.com",
  description:
    "World's Fair Information Manual at the Pool of Industry — 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return <PoolinTopicStub title={"World's Fair Information Manual"} />;
}
