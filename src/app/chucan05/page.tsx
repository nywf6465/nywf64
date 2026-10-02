import type { Metadata } from "next";
import { ChucanTopicStub } from "@/components/ChucanTopicStub";

export const metadata: Metadata = {
  title: "The Sculpture Continuum \u2014 Chunky Candy \u2014 nywf64.com",
  description:
    "The Sculpture Continuum \u2014 Chunky Candy at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <ChucanTopicStub title={"The Sculpture Continuum"} />;
}
