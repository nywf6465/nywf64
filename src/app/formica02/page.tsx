import type { Metadata } from "next";
import { FormicaTopicStub } from "@/components/FormicaTopicStub";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Formica — nywf64.com",
  description:
    "World's Fair Information Manual — Formica at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Page() {
  return <FormicaTopicStub title="World's Fair Information Manual" />;
}
