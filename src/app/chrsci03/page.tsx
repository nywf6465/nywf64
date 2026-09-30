import type { Metadata } from "next";
import { ChrsciTopicStub } from "@/components/ChrsciTopicStub";

export const metadata: Metadata = {
  title: "Postcards \u2014 Christian Science \u2014 nywf64.com",
  description:
    "Postcards \u2014 Christian Science at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <ChrsciTopicStub title={"Postcards"} />;
}
