import type { Metadata } from "next";
import { FordTopicStub } from "@/components/FordTopicStub";

export const metadata: Metadata = {
  title: "Article: Ford Wonder Rotunda \u2014 Ford Pavilion \u2014 nywf64.com",
  description: "Article: Ford Wonder Rotunda at the 1964/1965 New York World's Fair \u2014 Ford Pavilion on nywf64.com.",
};

export default function Page() {
  return <FordTopicStub title={"Article: Ford Wonder Rotunda"} />;
}
