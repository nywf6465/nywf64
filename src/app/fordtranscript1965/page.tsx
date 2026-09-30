import type { Metadata } from "next";
import { FordTopicStub } from "@/components/FordTopicStub";

export const metadata: Metadata = {
  title: "The Magic Skyway - Transcript of the 1965 Show \u2014 Ford Pavilion \u2014 nywf64.com",
  description: "The Magic Skyway - Transcript of the 1965 Show at the 1964/1965 New York World's Fair \u2014 Ford Pavilion on nywf64.com.",
};

export default function Page() {
  return <FordTopicStub title={"The Magic Skyway - Transcript of the 1965 Show"} />;
}
