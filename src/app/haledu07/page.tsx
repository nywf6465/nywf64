import type { Metadata } from "next";
import { HaleduTopicStub } from "@/components/HaleduTopicStub";

export const metadata: Metadata = {
  title: "Brochure: Concrete at the Fair \u2014 Hall of Education \u2014 nywf64.com",
  description: "Brochure: Concrete at the Fair \u2014 Hall of Education at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <HaleduTopicStub title={"Brochure: Concrete at the Fair"} />;
}
