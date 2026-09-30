import type { Metadata } from "next";
import { DynmatTopicStub } from "@/components/DynmatTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Dynamic Maturity — nywf64.com",
  description:
    "World's Fair Information Manual — Dynamic Maturity at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <DynmatTopicStub title={"World's Fair Information Manual"} />;
}
