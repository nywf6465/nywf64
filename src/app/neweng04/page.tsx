import type { Metadata } from "next";
import { NewengTopicStub } from "@/components/NewengTopicStub";

export const metadata: Metadata = {
  title:
    "New England Article: What it Took to get New England to the Fair — nywf64.com",
  description:
    "New England Article: What it Took to get New England to the Fair — New England at the 1964/1965 New York World's Fair on nywf64.com.",
};

export default function Page() {
  return (
    <NewengTopicStub title="Article: What it Took to get New England to the Fair" />
  );
}
