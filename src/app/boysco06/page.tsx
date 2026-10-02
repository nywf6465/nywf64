import type { Metadata } from "next";
import { BoyscoTopicStub } from "@/components/BoyscoTopicStub";

export const metadata: Metadata = {
  title:
    "Brochure: The Wonderful World of Scouting \u2014 Boy Scouts of America \u2014 nywf64.com",
  description:
    "Brochure: The Wonderful World of Scouting \u2014 Boy Scouts of America at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <BoyscoTopicStub title={"Brochure: The Wonderful World of Scouting"} />
  );
}
