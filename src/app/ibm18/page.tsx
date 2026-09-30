import type { Metadata } from "next";
import { IbmTopicStub } from "@/components/IbmTopicStub";

export const metadata: Metadata = {
  title: "The End of the Fair — IBM Pavilion — nywf64.com",
  description:
    "The End of the Fair at the 1964/1965 New York World's Fair — IBM Pavilion on nywf64.com.",
};

export default function Page() {
  return <IbmTopicStub title={"The End of the Fair"} />;
}
