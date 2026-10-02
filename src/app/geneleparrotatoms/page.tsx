import type { Metadata } from "next";
import { GeneleTopicStub } from "@/components/GeneleTopicStub";

export const metadata: Metadata = {
  title: "Article: Parrot & Atoms Help GE Tell Story of Power \u2014 General Electric Pavilion \u2014 nywf64.com",
  description: "Article: Parrot & Atoms Help GE Tell Story of Power at the 1964/1965 New York World's Fair \u2014 General Electric Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <GeneleTopicStub title={"Article: Parrot & Atoms Help GE Tell Story of Power"} />;
}
