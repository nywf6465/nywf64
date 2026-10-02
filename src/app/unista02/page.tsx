import type { Metadata } from "next";
import { UnistaTopicStub } from "@/components/UnistaTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — United States Pavilion — nywf64.com",
  description:
    "World's Fair Information Manual at the 1964/1965 New York World's Fair — United States Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <UnistaTopicStub title={"World's Fair Information Manual"} />;
}
