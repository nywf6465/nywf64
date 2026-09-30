import type { Metadata } from "next";
import { RusortTopicStub } from "@/components/RusortTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Russian Orthodox Greek-Catholic Church of America \u2014 nywf64.com",
  description:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries \u2014 Russian Orthodox Greek-Catholic Church of America at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <RusortTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map Entries"} />;
}
