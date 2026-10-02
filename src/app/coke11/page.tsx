import type { Metadata } from "next";
import { CokeTopicStub } from "@/components/CokeTopicStub";

export const metadata: Metadata = {
  title:
    "The Refresher May-June 1964 — Coca-Cola — nywf64.com",
  description:
    "The Refresher May-June 1964 — Coca-Cola at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <CokeTopicStub
      title={"The Refresher May-June 1964"}
    />
  );
}
