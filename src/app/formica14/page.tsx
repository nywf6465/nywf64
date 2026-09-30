import type { Metadata } from "next";
import { FormicaTopicStub } from "@/components/FormicaTopicStub";

export const metadata: Metadata = {
  title: "Boy's Room — Formica — nywf64.com",
  description:
    "Boy's Room — Formica at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <FormicaTopicStub title="Boy's Room" />;
}
