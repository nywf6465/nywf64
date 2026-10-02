import type { Metadata } from "next";
import { TwothoTopicStub } from "@/components/TwothoTopicStub";

export const metadata: Metadata = {
  title: "Postcards \u2014 Two Thousand Tribes \u2014 nywf64.com",
  description:
    "Postcards \u2014 Two Thousand Tribes at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <TwothoTopicStub title={"Postcards"} />;
}
