import type { Metadata } from "next";
import { EaskodTopicStub } from "@/components/EaskodTopicStub";

export const metadata: Metadata = {
  title: "Brochure: Kodak at the Fair — Eastman Kodak Pavilion — nywf64.com",
  description:
    "Brochure: Kodak at the Fair at the 1964/1965 New York World's Fair — Eastman Kodak Pavilion on nywf64.com.",
};

export default function Page() {
  return <EaskodTopicStub title={"Brochure: Kodak at the Fair"} />;
}
