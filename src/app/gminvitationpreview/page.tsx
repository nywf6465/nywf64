import type { Metadata } from "next";
import { GmTopicStub } from "@/components/GmTopicStub";

export const metadata: Metadata = {
  title: "Invitation to Preview Futurama \u2014 General Motors Pavilion \u2014 nywf64.com",
  description: "Invitation to Preview Futurama at the 1964/1965 New York World's Fair \u2014 General Motors Pavilion on nywf64.com.",
};

export default function Page() {
  return <GmTopicStub title={"Invitation to Preview Futurama"} />;
}
