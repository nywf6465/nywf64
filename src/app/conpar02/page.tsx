import type { Metadata } from "next";
import { ConparTopicStub } from "@/components/ConparTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Continental Park — nywf64.com",
  description:
    "World's Fair Information Manual — Continental Park at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <ConparTopicStub
      title={"World's Fair Information Manual"}
    />
  );
}
