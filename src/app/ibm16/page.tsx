import type { Metadata } from "next";
import { IbmTopicStub } from "@/components/IbmTopicStub";

export const metadata: Metadata = {
  title: "Article: People in Motion — IBM Pavilion — nywf64.com",
  description:
    "Article: People in Motion at the 1964/1965 New York World's Fair — IBM Pavilion on nywf64.com.",
};

export default function Page() {
  return <IbmTopicStub title={"Article: People in Motion"} />;
}
