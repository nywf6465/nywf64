import type { Metadata } from "next";
import { GeneleTopicStub } from "@/components/GeneleTopicStub";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook & Souvenir Map \u2014 General Electric Pavilion \u2014 nywf64.com",
  description: "1964 & 1965 Official Guidebook & Souvenir Map at the 1964/1965 New York World's Fair \u2014 General Electric Pavilion on nywf64.com.",
};

export default function Page() {
  return <GeneleTopicStub title={"1964 & 1965 Official Guidebook & Souvenir Map"} />;
}
