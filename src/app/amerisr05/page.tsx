import type { Metadata } from "next";
import { AmerisrTopicStub } from "@/components/AmerisrTopicStub";

export const metadata: Metadata = {
  title: "Pamphlet: Dedication Ceremony \u2014 American-Israel Pavilion \u2014 nywf64.com",
  description:
    "Pamphlet: Dedication Ceremony \u2014 American-Israel Pavilion at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <AmerisrTopicStub title={"Pamphlet: Dedication Ceremony"} />;
}
