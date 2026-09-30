import type { Metadata } from "next";
import { BellTopicStub } from "@/components/BellTopicStub";

export const metadata: Metadata = {
  title: "bellfloatingwing — Bell System Pavilion — nywf64.com",
  description:
    "bellfloatingwing at the 1964/1965 New York World's Fair — Bell System Pavilion on nywf64.com.",
};

export default function Page() {
  return <BellTopicStub title={"bellfloatingwing"} />;
}
