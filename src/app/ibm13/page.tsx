import type { Metadata } from "next";
import { IbmTopicStub } from "@/components/IbmTopicStub";

export const metadata: Metadata = {
  title: "Listen to Audio of the \"Information Machine\" Show! — IBM Pavilion — nywf64.com",
  description:
    "Listen to Audio of the \"Information Machine\" Show! at the 1964/1965 New York World's Fair — IBM Pavilion on nywf64.com.",
};

export default function Page() {
  return <IbmTopicStub title={"Listen to Audio of the \"Information Machine\" Show!"} />;
}
