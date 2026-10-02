import type { Metadata } from "next";
import { ChrsciTopicStub } from "@/components/ChrsciTopicStub";

export const metadata: Metadata = {
  title: "Brochure: Christian Science at the World's Fair 1964-1965 \u2014 Christian Science \u2014 nywf64.com",
  description:
    "Brochure: Christian Science at the World's Fair 1964-1965 \u2014 Christian Science at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <ChrsciTopicStub title={"Brochure: Christian Science at the World's Fair 1964-1965"} />;
}
