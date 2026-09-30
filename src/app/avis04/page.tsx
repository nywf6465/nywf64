import type { Metadata } from "next";
import { AvisTopicStub } from "@/components/AvisTopicStub";

export const metadata: Metadata = {
  title: "Pamphlet: Dedication Day \u2014 Avis Antique Car Ride \u2014 nywf64.com",
  description:
    "Pamphlet: Dedication Day \u2014 Avis Antique Car Ride at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <AvisTopicStub title={"Pamphlet: Dedication Day"} />;
}
