import type { Metadata } from "next";
import { FordTopicStub } from "@/components/FordTopicStub";

export const metadata: Metadata = {
  title: "Article: Preview of Ford's Pavilion at the New York World's Fair \u2014 Ford Pavilion \u2014 nywf64.com",
  description: "Article: Preview of Ford's Pavilion at the New York World's Fair at the 1964/1965 New York World's Fair \u2014 Ford Pavilion on nywf64.com.",
};

export default function Page() {
  return <FordTopicStub title={"Article: Preview of Ford's Pavilion at the New York World's Fair"} />;
}
