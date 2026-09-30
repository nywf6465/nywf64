import type { Metadata } from "next";
import { FormicaTopicStub } from "@/components/FormicaTopicStub";

export const metadata: Metadata = {
  title: "Girl's Room & Children's Bath — Formica — nywf64.com",
  description:
    "Girl's Room & Children's Bath — Formica at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <FormicaTopicStub title="Girl's Room & Children's Bath" />;
}
