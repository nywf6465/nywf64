import type { Metadata } from "next";
import { OregonTopicStub } from "@/components/OregonTopicStub";

export const metadata: Metadata = {
  title: "Timber Carnival Program — Oregon — nywf64.com",
  description:
    "Timber Carnival Program — Oregon at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <OregonTopicStub title={"Timber Carnival Program"} />;
}
