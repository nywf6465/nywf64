import type { Metadata } from "next";
import { LowengarTopicStub } from "@/components/LowengarTopicStub";

export const metadata: Metadata = {
  title: "Lowenbrau Gardens Postcards \u2014 nywf64.com",
  description:
    "Lowenbrau Gardens Postcards \u2014 Lowenbrau Gardens at the 1964/1965 New York World\u2019s Fair on nywf64.com.",
};

export default function Page() {
  return <LowengarTopicStub title="Postcards" />;
}
