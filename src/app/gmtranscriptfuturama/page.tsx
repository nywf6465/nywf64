import type { Metadata } from "next";
import { GmTopicStub } from "@/components/GmTopicStub";

export const metadata: Metadata = {
  title: "Transcript of the Futurama II Ride with audio! \u2014 General Motors Pavilion \u2014 nywf64.com",
  description: "Transcript of the Futurama II Ride with audio! at the 1964/1965 New York World's Fair \u2014 General Motors Pavilion on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <GmTopicStub title={"Transcript of the Futurama II Ride with audio!"} />;
}
