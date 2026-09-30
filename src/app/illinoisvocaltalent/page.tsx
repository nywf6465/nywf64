import type { Metadata } from "next";
import { IllinoisTopicStub } from "@/components/IllinoisTopicStub";

export const metadata: Metadata = {
  title: "Vocal Talent — Illinois Pavilion — nywf64.com",
  description: "Vocal Talent at the 1964/1965 New York World's Fair — Illinois Pavilion on nywf64.com.",
};

export default function Page() {
  return <IllinoisTopicStub title={"Vocal Talent"} />;
}
