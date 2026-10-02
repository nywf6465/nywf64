import type { Metadata } from "next";
import { PoolinTopicStub } from "@/components/PoolinTopicStub";

export const metadata: Metadata = {
  title: "Fountain Show Music — Pool of Industry — nywf64.com",
  description:
    "Fountain Show Music at the Pool of Industry — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PoolinTopicStub title={"Fountain Show Music"} />;
}
