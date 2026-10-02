import type { Metadata } from "next";
import { HonkonTopicStub } from "@/components/HonkonTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Hong Kong \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 Hong Kong at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <HonkonTopicStub title={'Photograph Album'} />;
}
