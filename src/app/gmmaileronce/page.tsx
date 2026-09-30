import type { Metadata } from "next";
import { GmTopicStub } from "@/components/GmTopicStub";

export const metadata: Metadata = {
  title: "Mailer: If You've Only Seen it Once \u2014 General Motors Pavilion \u2014 nywf64.com",
  description: "Mailer: If You've Only Seen it Once at the 1964/1965 New York World's Fair \u2014 General Motors Pavilion on nywf64.com.",
};

export default function Page() {
  return <GmTopicStub title={"Mailer: If You've Only Seen it Once"} />;
}
