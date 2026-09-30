import type { Metadata } from "next";
import { BellTopicStub } from "@/components/BellTopicStub";

export const metadata: Metadata = {
  title: "belladvertising — Bell System Pavilion — nywf64.com",
  description:
    "belladvertising at the 1964/1965 New York World's Fair — Bell System Pavilion on nywf64.com.",
};

export default function Page() {
  return <BellTopicStub title={"belladvertising"} />;
}
