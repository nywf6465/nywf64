import type { Metadata } from "next";
import { UnistaTopicStub } from "@/components/UnistaTopicStub";

export const metadata: Metadata = {
  title: "Proposal for a National Center of Science and Education — United States Pavilion — nywf64.com",
  description:
    "Proposal for a National Center of Science and Education at the 1964/1965 New York World's Fair — United States Pavilion on nywf64.com.",
};

export default function Page() {
  return <UnistaTopicStub title={"Proposal for a National Center of Science and Education"} />;
}
