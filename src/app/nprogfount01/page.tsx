import type { Metadata } from "next";
import { NprogfountTopicStub } from "@/components/NprogfountTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guide Book & Souvenir Map — Fountain of Progress North — nywf64.com",
  description:
    "1964 & 1965 Official Guide Book & Souvenir Map at the Fountain of Progress North — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <NprogfountTopicStub
      title={"1964 & 1965 Official Guide Book & Souvenir Map"}
    />
  );
}
