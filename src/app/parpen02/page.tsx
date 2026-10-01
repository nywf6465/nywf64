import type { Metadata } from "next";
import { ParpenTopicStub } from "@/components/ParpenTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Parker Pen — nywf64.com",
  description:
    "World's Fair Information Manual — Parker Pen at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <ParpenTopicStub title={"World's Fair Information Manual"} />;
}
