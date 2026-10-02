import type { Metadata } from "next";
import { BoustrTopicStub } from "@/components/BoustrTopicStub";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 Bourbon Street \u2014 nywf64.com",
  description:
    "Photograph Album \u2014 Bourbon Street at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <BoustrTopicStub title={"Photograph Album"} />;
}
