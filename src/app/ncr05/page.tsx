import type { Metadata } from "next";
import { NcrTopicStub } from "@/components/NcrTopicStub";

export const metadata: Metadata = {
  title: "NCR Essay: Space Frame Design for a Space Age Look — nywf64.com",
  description:
    "NCR Essay: Space Frame Design for a Space Age Look — NCR at the 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <NcrTopicStub title="Essay: Space Frame Design for a Space Age Look" />
  );
}
