import type { Metadata } from "next";
import { FordTopicStub } from "@/components/FordTopicStub";

export const metadata: Metadata = {
  title: "Brochure: Ride Walt Disney's Magic Skyway \u2014 Ford Pavilion \u2014 nywf64.com",
  description: "Brochure: Ride Walt Disney's Magic Skyway at the 1964/1965 New York World's Fair \u2014 Ford Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FordTopicStub title={"Brochure: Ride Walt Disney's Magic Skyway"} />;
}
