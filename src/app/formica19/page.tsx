import type { Metadata } from "next";
import { FormicaTopicStub } from "@/components/FormicaTopicStub";

export const metadata: Metadata = {
  title: "History of the Formica Corporation — Formica — nywf64.com",
  description:
    "History of the Formica Corporation — Formica at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <FormicaTopicStub title="History of the Formica Corporation" />;
}
