import type { Metadata } from "next";
import { GmTopicStub } from "@/components/GmTopicStub";

export const metadata: Metadata = {
  title: "Brochure: Your Guide to the General Motors Futurama \u2014 General Motors Pavilion \u2014 nywf64.com",
  description: "Brochure: Your Guide to the General Motors Futurama at the 1964/1965 New York World's Fair \u2014 General Motors Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <GmTopicStub title={"Brochure: Your Guide to the General Motors Futurama"} />;
}
