import type { Metadata } from "next";
import { PepsiTopicStub } from "@/components/PepsiTopicStub";

export const metadata: Metadata = {
  title: "pepsi01 — Pepsi-Cola Pavilion — nywf64.com",
  description:
    "pepsi01 at the 1964/1965 New York World's Fair — Pepsi-Cola Pavilion on nywf64.com.",
};

export default function Page() {
  return <PepsiTopicStub title={"pepsi01"} />;
}
