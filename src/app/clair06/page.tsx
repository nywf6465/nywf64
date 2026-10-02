import type { Metadata } from "next";
import { ClairTopicStub } from "@/components/ClairTopicStub";

export const metadata: Metadata = {
  title:
    "Those Amazing Bubbles — Clairol — nywf64.com",
  description:
    "Those Amazing Bubbles — Clairol at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <ClairTopicStub
      title={"Those Amazing Bubbles"}
    />
  );
}
