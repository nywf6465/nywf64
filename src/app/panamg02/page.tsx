import type { Metadata } from "next";
import { PanamgTopicStub } from "@/components/PanamgTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual \u2014 Avis Pan American Highway Rides \u2014 nywf64.com",
  description:
    "World's Fair Information Manual \u2014 Avis Pan American Highway Rides at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <PanamgTopicStub title={"World's Fair Information Manual"} />;
}
