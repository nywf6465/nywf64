import type { Metadata } from "next";
import { PennsyTopicStub } from "@/components/PennsyTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Pennsylvania — nywf64.com",
  description:
    "World's Fair Information Manual — Pennsylvania at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <PennsyTopicStub title={"World's Fair Information Manual"} />;
}
