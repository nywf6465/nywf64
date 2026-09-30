import type { Metadata } from "next";
import { DanwatTopicStub } from "@/components/DanwatTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Dancing Waters — nywf64.com",
  description:
    "World's Fair Information Manual — Dancing Waters at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <DanwatTopicStub
      title={"World's Fair Information Manual"}
    />
  );
}
