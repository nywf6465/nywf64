import type { Metadata } from "next";
import { BerlinTopicStub } from "@/components/BerlinTopicStub";

export const metadata: Metadata = {
  title: "Brochure: Pavilion Guide II \u2014 Berlin \u2014 nywf64.com",
  description:
    "Brochure: Pavilion Guide II \u2014 Berlin at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <BerlinTopicStub title={"Brochure: Pavilion Guide II"} />;
}
