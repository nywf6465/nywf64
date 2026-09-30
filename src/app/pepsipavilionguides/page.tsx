import type { Metadata } from "next";
import { PepsiTopicStub } from "@/components/PepsiTopicStub";

export const metadata: Metadata = {
  title: "Pavilion Guides \u2014 Pepsi-Cola Pavilion \u2014 nywf64.com",
  description: "Pavilion Guides at the 1964/1965 New York World's Fair \u2014 Pepsi-Cola Pavilion on nywf64.com.",
};

export default function Page() {
  return <PepsiTopicStub title={"Pavilion Guides"} />;
}
