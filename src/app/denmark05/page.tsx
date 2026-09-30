import type { Metadata } from "next";
import { DenmarkTopicStub } from "@/components/DenmarkTopicStub";

export const metadata: Metadata = {
  title: "Pamphlet: Pavilion Guide — Denmark — nywf64.com",
  description:
    "Pamphlet: Pavilion Guide — Denmark at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <DenmarkTopicStub title={"Pamphlet: Pavilion Guide"} />;
}
