import type { Metadata } from "next";
import { ClairTopicStub } from "@/components/ClairTopicStub";

export const metadata: Metadata = {
  title:
    "After the Fair - Beauty on Wheels — Clairol — nywf64.com",
  description:
    "After the Fair - Beauty on Wheels — Clairol at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <ClairTopicStub
      title={"After the Fair - Beauty on Wheels"}
    />
  );
}
