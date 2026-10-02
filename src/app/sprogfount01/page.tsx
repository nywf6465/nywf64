import type { Metadata } from "next";
import { SprogfountTopicStub } from "@/components/SprogfountTopicStub";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fountain of Progress South — nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map at the Fountain of Progress South — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <SprogfountTopicStub
      title={"1964 & 1965 Official Guidebook & Souvenir Map"}
    />
  );
}
