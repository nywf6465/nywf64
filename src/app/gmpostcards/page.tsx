import type { Metadata } from "next";
import { GmTopicStub } from "@/components/GmTopicStub";

export const metadata: Metadata = {
  title: "Postcards \u2014 General Motors Pavilion \u2014 nywf64.com",
  description: "Postcards at the 1964/1965 New York World's Fair \u2014 General Motors Pavilion on nywf64.com.",
};

export default function Page() {
  return <GmTopicStub title={"Postcards"} />;
}
