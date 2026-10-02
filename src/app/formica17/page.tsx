import type { Metadata } from "next";
import { FormicaTopicStub } from "@/components/FormicaTopicStub";

export const metadata: Metadata = {
  title: "A World's Fair House in Ohio — Formica — nywf64.com",
  description:
    "A World's Fair House in Ohio — Formica at the 1964/1965 New York World’s Fair on nywf64.com.",
};

export const dynamic = 'force-dynamic';

export default function Page() {
  return <FormicaTopicStub title="A World's Fair House in Ohio" />;
}
