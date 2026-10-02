import type { Metadata } from "next";
import { GeneleTopicStub } from "@/components/GeneleTopicStub";

export const metadata: Metadata = {
  title: "Advertising \u2014 General Electric Pavilion \u2014 nywf64.com",
  description: "Advertising at the 1964/1965 New York World's Fair \u2014 General Electric Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <GeneleTopicStub title={"Advertising"} />;
}
