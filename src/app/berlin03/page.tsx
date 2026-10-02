import type { Metadata } from "next";
import { BerlinTopicStub } from "@/components/BerlinTopicStub";

export const metadata: Metadata = {
  title: "Photograph Gallery \u2014 Berlin \u2014 nywf64.com",
  description:
    "Photograph Gallery \u2014 Berlin at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <BerlinTopicStub title={"Photograph Gallery"} />;
}
