import type { Metadata } from "next";
import { GeneleTopicStub } from "@/components/GeneleTopicStub";

export const metadata: Metadata = {
  title: "There's a Great Big Beautiful Tomorrow \u2014 General Electric Pavilion \u2014 nywf64.com",
  description: "There's a Great Big Beautiful Tomorrow at the 1964/1965 New York World's Fair \u2014 General Electric Pavilion on nywf64.com.",
};

export default function Page() {
  return <GeneleTopicStub title={"There's a Great Big Beautiful Tomorrow"} />;
}
