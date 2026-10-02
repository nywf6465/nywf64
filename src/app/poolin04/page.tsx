import type { Metadata } from "next";
import { PoolinTopicStub } from "@/components/PoolinTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album — Pool of Industry — nywf64.com",
  description:
    "Photograph Album at the Pool of Industry — 1964/1965 New York World's Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PoolinTopicStub title={"Photograph Album"} />;
}
