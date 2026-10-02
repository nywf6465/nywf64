import type { Metadata } from "next";
import { NewengTopicStub } from "@/components/NewengTopicStub";

export const metadata: Metadata = {
  title: "New England Article: New England Scenes — nywf64.com",
  description:
    "New England Article: New England Scenes — New England at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <NewengTopicStub title="Article: New England Scenes" />;
}
