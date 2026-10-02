import type { Metadata } from "next";
import { ConcirTopicStub } from "@/components/ConcirTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Continental Circus — nywf64.com",
  description:
    "World's Fair Information Manual — Continental Circus at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <ConcirTopicStub
      title={"World's Fair Information Manual"}
    />
  );
}
