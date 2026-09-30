import type { Metadata } from "next";
import { CokeTopicStub } from "@/components/CokeTopicStub";

export const metadata: Metadata = {
  title:
    "Brochure: News of the World of Refreshment 1965 — Coca-Cola — nywf64.com",
  description:
    "Brochure: News of the World of Refreshment 1965 — Coca-Cola at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return (
    <CokeTopicStub
      title={"Brochure: News of the World of Refreshment 1965"}
    />
  );
}
