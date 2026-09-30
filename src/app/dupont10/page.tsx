import type { Metadata } from "next";
import { DupontTopicStub } from "@/components/DupontTopicStub";

export const metadata: Metadata = {
  title: "Article: Backstage at the Fair \u2014 DuPont Pavilion \u2014 nywf64.com",
  description:
    "Article: Backstage at the Fair at the 1964/1965 New York World's Fair \u2014 DuPont Pavilion on nywf64.com.",
};

export default function Page() {
  return <DupontTopicStub title={"Article: Backstage at the Fair"} />;
}
