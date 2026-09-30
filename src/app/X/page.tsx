import type { Metadata } from "next";
import { AtozLetterStub } from "@/components/AtozLetterStub";

export const metadata: Metadata = {
  title: "X — The Attractions from A to Z — nywf64.com",
  description:
    "X — Attractions from A to Z at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Stub neighbor for letter nav (V ↔ W ↔ X). Full X landing deferred —
 * historical atoz index has no X card until content arrives.
 */
export default function Page() {
  return <AtozLetterStub letter="X" rangeLabel="X attractions" />;
}
