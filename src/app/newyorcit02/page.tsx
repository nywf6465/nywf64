import type { Metadata } from "next";
import { NewyorcitTopicStub } from "@/components/NewyorcitTopicStub";

export const metadata: Metadata = {
  title: "New York City World's Fair Information Manual — nywf64.com",
  description:
    "New York City World's Fair Information Manual — New York City at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <NewyorcitTopicStub title="World's Fair Information Manual" />;
}
