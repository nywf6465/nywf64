import type { Metadata } from "next";
import { IllinoisTopicStub } from "@/components/IllinoisTopicStub";

export const metadata: Metadata = {
  title: "Great Moments with Mr. Lincoln — Illinois Pavilion — nywf64.com",
  description: "Great Moments with Mr. Lincoln at the 1964/1965 New York World's Fair — Illinois Pavilion on nywf64.com.",
};

export default function Page() {
  return <IllinoisTopicStub title={"Great Moments with Mr. Lincoln"} />;
}
