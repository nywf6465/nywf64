import type { Metadata } from "next";
import { AmindTopicStub } from "@/components/AmindTopicStub";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual \u2014 American Indian Exposition \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 American Indian Exposition at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <AmindTopicStub title={"World's Fair Information Manual"} />;
}
