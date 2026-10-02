import type { Metadata } from "next";
import { RusortTopicStub } from "@/components/RusortTopicStub";

export const metadata: Metadata = {
  title: "Postcards \u2014 Russian Orthodox Greek-Catholic Church of America \u2014 nywf64.com",
  description:
    "Postcards \u2014 Russian Orthodox Greek-Catholic Church of America at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <RusortTopicStub title={"Postcards"} />;
}
