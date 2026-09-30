import type { Metadata } from "next";
import { AtozLetterStub } from "@/components/AtozLetterStub";

export const metadata: Metadata = {
  title: "Q — The Attractions from A to Z — nywf64.com",
  description:
    "Q — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Stub neighbor for letter nav (O ↔ P ↔ Q). Full Q landing deferred —
 * historical atoz index skips Q until content arrives.
 */
export default function Page() {
  return <AtozLetterStub letter="Q" rangeLabel="Q attractions" />;
}
