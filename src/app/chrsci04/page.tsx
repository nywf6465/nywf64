import type { Metadata } from "next";
import { ChrsciTopicStub } from "@/components/ChrsciTopicStub";

export const metadata: Metadata = {
  title: "Advertising \u2014 Christian Science \u2014 nywf64.com",
  description:
    "Advertising \u2014 Christian Science at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <ChrsciTopicStub title={"Advertising"} />;
}
