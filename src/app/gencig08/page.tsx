import type { Metadata } from "next";
import { GencigTopicStub } from "@/components/GencigTopicStub";

export const metadata: Metadata = {
  title: "Article: A Look into \"Patterns in Sports\" \u2014 General Cigar \u2014 nywf64.com",
  description: "Article: A Look into \"Patterns in Sports\" \u2014 General Cigar at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <GencigTopicStub title={"Article: A Look into \"Patterns in Sports\""} />;
}
