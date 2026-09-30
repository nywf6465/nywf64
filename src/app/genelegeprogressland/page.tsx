import type { Metadata } from "next";
import { GeneleTopicStub } from "@/components/GeneleTopicStub";

export const metadata: Metadata = {
  title: "Article: G.E.'s \"Progressland\" \u2014 General Electric Pavilion \u2014 nywf64.com",
  description: "Article: G.E.'s \"Progressland\" at the 1964/1965 New York World's Fair \u2014 General Electric Pavilion on nywf64.com.",
};

export default function Page() {
  return <GeneleTopicStub title={"Article: G.E.'s \"Progressland\""} />;
}
