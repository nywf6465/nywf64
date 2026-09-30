import type { Metadata } from "next";
import { UnisphTopicStub } from "@/components/UnisphTopicStub";

export const metadata: Metadata = {
  title: "Brochure: Graphic Standards Manual — Unisphere — nywf64.com",
  description:
    "Brochure: Graphic Standards Manual at the 1964/1965 New York World's Fair — Unisphere on nywf64.com.",
};

export default function Page() {
  return <UnisphTopicStub title={"Brochure: Graphic Standards Manual"} />;
}
