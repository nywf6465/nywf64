import type { Metadata } from "next";
import { UnisphTopicStub } from "@/components/UnisphTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Unisphere — nywf64.com",
  description:
    "World's Fair Information Manual at the 1964/1965 New York World's Fair — Unisphere on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <UnisphTopicStub title={"World's Fair Information Manual"} />;
}
