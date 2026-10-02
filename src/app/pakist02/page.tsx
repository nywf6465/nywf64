import type { Metadata } from "next";
import { PakistTopicStub } from "@/components/PakistTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Pakistan — nywf64.com",
  description:
    "World's Fair Information Manual — Pakistan at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PakistTopicStub title={"World's Fair Information Manual"} />;
}
