import type { Metadata } from "next";
import { ConinsTopicStub } from "@/components/ConinsTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Continental Insurance — nywf64.com",
  description:
    "World's Fair Information Manual — Continental Insurance at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <ConinsTopicStub
      title={"World's Fair Information Manual"}
    />
  );
}
