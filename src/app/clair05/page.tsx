import type { Metadata } from "next";
import { ClairTopicStub } from "@/components/ClairTopicStub";

export const metadata: Metadata = {
  title:
    "Good Afternoon Ladies... — Clairol — nywf64.com",
  description:
    "Good Afternoon Ladies... — Clairol at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <ClairTopicStub
      title={"Good Afternoon Ladies..."}
    />
  );
}
